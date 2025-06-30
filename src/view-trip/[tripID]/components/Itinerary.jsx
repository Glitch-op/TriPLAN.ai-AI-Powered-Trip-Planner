import { Key } from 'lucide-react'
import React from 'react'
import Placecard from './placecard'

const Itinerary = ({ trip }) => {
  return (
    <div>
      <h1 className='font-bold text-2xl mt-5'><span className='text-[#FF5050] text-shadow-md'>Daily</span> Itinerary</h1>


      <div >
        {trip?.tripdata?.TravelPlan?.Itinerary?.map((day, index) => {
        return (
          <React.Fragment key={index} >
            <div className='font-bold text-xl m-5 '>Day: {day.Day}</div>
            {day?.Plan?.Activities?.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='ml-4 text-base font-normal'>
                  <div className='my-3'>
                  
                    <Placecard place={item} />
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        )
        })}
      </div>

    </div>
  )
}

export default Itinerary
