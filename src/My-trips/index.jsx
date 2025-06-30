import { db } from '@/Service/firebaseConfig';
import UserTripItemCard from './components/UserTripItemCard';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import Footer from '@/components/custom/footer';

const MyTrips = () => {

    const navigation = useNavigation();

    const [UserTrips, setUserTrips] = useState([])

    useEffect(() => {
        GetUserTrips();
    }, [])

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigation('/')
            return;
        }
        setUserTrips([]);
        const q = query(collection(db, "Trips"), where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data());
            setUserTrips(prevVal => [...prevVal, doc.data()])

        })
    }

    return (
        <div className='sm:px-10 md:px-15 lg:px-20 xl:px-25 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='mt-10 grid grid-cols-3 md:grid-cols-6 gap-5'>
                {UserTrips?.length>0?UserTrips.map((trip, index) => {
                    return(
                        <UserTripItemCard trip={trip} key={index} />
                    )
                })
            :[1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>{
                return (<div key={index} className='h-[300px] w-full bg-slate-200 animate-pulse rounded-2xl'>

                </div>)
            })
            }
            </div>
            <Footer/>

        </div>
    )
}

export default MyTrips
