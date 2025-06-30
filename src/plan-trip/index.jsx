import { AI_Prompt, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import main from '@/Service/AIModel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/Service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/custom/footer';



const Plantrip = () => {
  const [place, setPlace] = useState();
  const [formData, setformData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleinputChange = (name, e) => {
    setformData({
      ...formData,
      [name]: e
    });
  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => GetUserProfile(codeResponse),
  });

  const OnGenerateTrip = async () => {


    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialog(true);
      return;
    }


    if (!formData?.duration || !formData?.budget || !formData?.people || !formData?.location) {
      toast("Please fill all the fields !")
      return;
    }
    if (formData?.duration > 10 || formData?.duration < 1) {
      toast("Please enter a valid duration !")
      return;
    }

    setLoading(true);
    toast("Generating Trip, Please wait...");

    const Final_AI_Prompt = AI_Prompt.replace("{Location}", formData?.location)
      .replace("{Duration}", formData?.duration)
      .replace("{Budget}", formData?.budget)
      .replace("{People}", formData?.people)
      .replace("{Duration}", formData?.duration);

    const result = await main(Final_AI_Prompt);
    console.log(result);
    setLoading(false);
    SaveAITrip(JSON.parse(result));


  }

  const SaveAITrip = async (TripData) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const docid = Date.now().toString();

    setLoading(true);


    await setDoc(doc(db, "Trips", docid), {
      userSelection: formData,
      tripdata: TripData,
      userEmail: user?.email,
      id: docid,
    });
    setLoading(false);
    navigate(`/view-trip/${docid}`);
  }

  const GetUserProfile = (tokeninfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokeninfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokeninfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      setOpenDialog(false);
      toast("Logged in successfully !");
      OnGenerateTrip();
    })
  }

  return (
    <div className='sm:px-10 md:px-15 lg:px-20 xl:px-25 px-5 mt-10'>
      <h1 className='font-bold text-3xl'>Tell Us About <span className='text-[#FF5050] text-shadow-md'>Your</span> Trip ⛰️🏖️</h1>
      <p className='m-5 text-gray-700 text-xl'>Help us create the perfect itinerary for you! Fill in the details below about your travel plans and preferences.</p>

      <div>
        <div className='mt-10'>
          <h2 className='text-xl font-medium  my-4'>Where do you want to go?</h2>
          <input type="text" className='border border-gray-500 font-medium p-2 rounded-md w-1/2' placeholder='Enter a destination...'
            onChange={(e) => { setPlace(e.target.value); handleinputChange('location', e.target.value) }} value={place} />

        </div>

        <div className='mt-5'>
          <h2 className='text-xl font-medium my-4'>How many days are you planning your trip?</h2>
          <input type="number" onChange={(e) => handleinputChange('duration', e.target.value)} className='border border-gray-500 font-medium p-2 rounded-md w-1/2' placeholder='{Ex.3}' />
        </div>

        <div className='mt-5'>
          <h2 className='text-xl font-medium my-4'>What is your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5 max-w-5xl">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleinputChange('budget', item.title)} className={`p-4 border rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer
              ${formData.budget === item.title ? 'bg-gray-200 shadow-xl' : ''}`}>
                <h2 className='text-3xl '>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-600'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-5'>
          <h2 className='text-xl font-medium my-4'>Who do you plan on travelling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5 max-w-5xl">

            {SelectTravelList.map((item, index) => (
              <div key={index}
                onClick={() => handleinputChange('people', item.people)} className={`p-4 border rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer
              ${formData.people === item.people ? 'bg-gray-200 shadow-xl' : ''}`}>
                <h2 className='text-3xl '>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-600'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className='m-10 flex justify-end w-[75%]'>
          <Button className="cursor-pointer" disabled={loading} onClick={OnGenerateTrip}>
            {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Generate Trip"}
          </Button>
        </div>


        <Dialog open= {openDialog}>
          {/* <DialogTrigger>Open</DialogTrigger> */}
          <DialogContent>
            <DialogHeader>
              {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
              < DialogDescription >
                <img width="150px" src="/TriPLAN-logo.svg" alt="" />
                <h2 className='text-grey font-bold text-lg mt-6 mb-1'>Sign In With Google</h2>
                <h2>Sign to the App with Google authentication securely</h2>
                <Button onClick={login} className="w-full mt-5 cursor-pointer flex items-center" > <FcGoogle className='w-7 mr-2' /> Sign In With Google</Button>
              </DialogDescription >
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </div>
  )
}

export default Plantrip


  