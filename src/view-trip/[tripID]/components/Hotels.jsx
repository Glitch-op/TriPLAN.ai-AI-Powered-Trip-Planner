import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({ trip }) => {
  return (
    <div>
      <h1 className='font-bold text-2xl mt-5'><span className='text-[#FF5050] text-shadow-md'>Hotel</span> Recommendations</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-5'>
        {trip?.tripdata?.TravelPlan?.HotelOptions?.map((hotel, index) => {
          return (<Link to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelName}"," ${hotel.HotelAddress}"," ${hotel.GeoCoordinates}`} target='_blank' ><div key={index} className='hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer p-3 rounded-xl'>
            <img className='rounded-xl' src="/hotel.jpg" alt="" />
            <div className='my-2 flex flex-col justify-center gap-1'>
              <h2 className='font-medium text-lg'>{hotel.HotelName}</h2>
              <h2 className='text-xs text-gray-500'>📍 {hotel.HotelAddress}</h2>
              <h2 className='text-sm font-medium'>💰 {hotel.Price}</h2>
              <h2 className='text-sm font-medium'>⭐ {hotel.rating}</h2>
            </div>
          </div>
          </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Hotels
