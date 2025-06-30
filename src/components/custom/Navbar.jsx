import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button.jsx'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
const Navbar = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // console.log(user);

  })

  const login = useGoogleLogin({
    onSuccess: codeResponse => GetUserProfile(codeResponse),
  });

  const GetUserProfile = (tokeninfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokeninfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokeninfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      setOpenDialog(false);
      window.location.reload();
      toast("Logged in successfully !");

    })
  }

  return (
    <div className='flex justify-between items-center bg-white shadow-lg p-3'>
      <div className='flex flex-col items-center'>
        <img className='w-40' src="/TriPLAN-logo.svg" alt="Trip Planner Logo" />
        <span>Your Trip Companion</span>
      </div>
      <div>
        {
          user ?
            <div className='flex items-center gap-3'>
              <a href="/plan-trip">
                <Button variant="outline" className="rounded-full cursor-pointer" >+ Create Trip</Button>
              </a>
              <a href="/My-trips">
                <Button variant="outline" className="rounded-full cursor-pointer" >My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img src={user?.picture} className='h-[35px] w-[35px] rounded-full cursor-pointer' />
                </PopoverTrigger>
                <PopoverContent>
                  <a href="/"><h2 className='cursor-pointer' onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}>Logout.</h2></a>
                </PopoverContent>
              </Popover>
            </div>
            :
            <Button className="cursor-pointer" onClick={() => setOpenDialog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDialog}>

        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img width="150px" src="/TriPLAN-logo.svg" alt="" />
              <h2 className='text-grey font-bold text-lg mt-6 mb-1'>Sign In With Google</h2>
              <h2>Sign to the App with Google authentication securely</h2>
              <Button onClick={login} className="w-full mt-5 cursor-pointer flex items-center" > <FcGoogle className='w-7 mr-2' /> Sign In With Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Navbar
