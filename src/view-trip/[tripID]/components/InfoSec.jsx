import React, { useEffect } from 'react'
import { FaShare } from "react-icons/fa6";
import { Button } from '@/components/ui/Button';
// import { GetPlaceDetails } from '@/Service/GlobalApi';
import { WhatsappShareButton, } from "react-share";


const InfoSec = ({ trip }) => {


    const currentpageURL = window.location.href;
    return (
        <div>
            <img className='h-[340px] w-full object-cover rounded-xl' src="/city.jpg" alt={trip?.title} />
            <div className='flex justify-between items-center '>
                <div className='my-5 flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>{trip?.userSelection?.location}</h1>
                    <div className='flex flex-wrap gap-2'>
                        <h1 className='p-2 px-3 bg-gray-200 rounded-full font-medium'>📅 {trip?.userSelection?.duration} Days</h1>
                        <h1 className='p-2 px-3 bg-gray-200 rounded-full font-medium'>💰 {trip?.userSelection?.budget} Budget</h1>
                        <h1 className='p-2 px-3 bg-gray-200 rounded-full font-medium'>✈️ No of Travelers: {trip?.userSelection?.people} </h1>
                    </div>
                </div>

                <Button className="cursor-pointer"> <WhatsappShareButton url={currentpageURL}> <FaShare /></WhatsappShareButton></Button>
            </div>
        </div>
    )
}

export default InfoSec
