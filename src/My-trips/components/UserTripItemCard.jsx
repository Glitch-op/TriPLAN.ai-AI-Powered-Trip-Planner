import React from 'react'
import { Link } from 'react-router-dom'

const UserTripItemCard = ({trip}) => {
  return (
      <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all p-5 '>
      <img className='object-cover rounded-2xl ' src="/hotel.jpg" alt="trips" />
      <div>
        <h2 className='font-bold text-xl'>📍{trip?.userSelection?.location}</h2>
        <h2 className='text-sm text-gray-500'> {trip?.userSelection?.duration} Days trip with {trip?.userSelection?.budget} Budget</h2>
      </div>
    </div>
      </Link>
  )
}

export default UserTripItemCard
