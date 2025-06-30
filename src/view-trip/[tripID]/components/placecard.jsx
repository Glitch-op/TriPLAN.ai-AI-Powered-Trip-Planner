import React from 'react'
import { Button } from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Placecard = ({place}) => {
  return (
    <div className=' hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-xl flex gap-5'>

        <img className='w-[160px] h-[160px] rounded-xl' src="/tajmahal.jpg" alt={place.PlaceName} />
        

      <div className='my-2 flex flex-col gap-1'>
        <h2 className='font-bold text-lg '>{place.PlaceName}</h2>
        <h2 className='text-xs text-gray-500'>{place.PlaceDetails}</h2>
        <h2 className='text-sm font-medium'>💰 {place.TicketPricing}</h2>
        <h2 className='text-sm font-medium '>🕒 {place.BestTime}</h2>
        <Link to={`https://www.google.com/maps/search/?api=1&query=${place.PlaceName},${place.GeoCoordinates}`} target='_blank'>
        <Button className='w-[40px] cursor-pointer'><FaMapLocationDot /></Button>
        </Link>
      </div>
    </div>
  )
}

export default Placecard
