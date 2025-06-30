import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { db } from '@/Service/firebaseConfig';
import InfoSec from './components/InfoSec';
import Hotels from './components/Hotels';
import Itinerary from './components/Itinerary';
import Footer from '../../components/custom/footer';

const viewtrip = () => {

    const {tripID} = useParams();
    const [trip, settrip] = useState([]);


    useEffect(() => {
      tripID && GetTripData();
    
    }, [tripID])
    
    const GetTripData=async ()=>{
      const docRef=doc(db, "Trips", tripID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        settrip(docSnap.data());
      }
      else {
        console.log("No such document!");
        toast.error("No such trip found!");
      }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information section */}
        <InfoSec  trip={trip} />

      {/* Recommended Hotels */}
      <Hotels trip={trip} />

      {/* Daily Plan */}
      <Itinerary trip={trip} />
      {/* Footer */}
      <Footer />

    </div>
  )
}

export default viewtrip
