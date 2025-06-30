import React from 'react'
import { Button } from '../ui/Button.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex items-center flex-col m-16'>
      <h1 className='font-extrabold text-3xl text-center'>Plan Your <span className='text-[#FF5050] text-shadow-md'>Perfect Trip</span>  with AI-Powered Precision</h1>
      <h2 className=' text-2xl text-center text-gray-700 m-13 w-[60%]'>Discover personalized itineraries, hidden gems, and stress-free travel planning — all tailored just for you by smart AI.</h2>
      <Link to="/plan-trip"><Button className=" cursor-pointer p-5">Plan Your Trip &gt; </Button></Link>

      <img className='m-20' src="/Landing.png" alt="" />
    </div>
  )
}

export default Hero
