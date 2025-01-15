import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useFirebase } from '../context/firebase';

const BookDetail = () => {

    const firebase = useFirebase();
    const {bookId} = useParams();

    const [data, setData] = useState(null);


    useEffect(()=>{
        firebase.getBookById(bookId).then((val) => setData(val.data()));
    }, []);

    if(data==null) return (
        <div className='w-full h-screen flex items-center justify-center'>
            <h1 className='text-2xl font-bold'>Loading....</h1>
        </div>
    )

  return (
    <div className='max-container md:mt-10 mt-2'>
        <h1 className='text-center font-bold text-4xl'>{data.name}</h1>

        <div className='mt-10 flex flex-wrap gap-10 '>
            <div>
                <img 
                src="https://t3.ftcdn.net/jpg/00/28/90/20/360_F_28902059_Kv9y7FKcnkZY6ho7tfSq4YxPm1oq0U4B.jpg" 
                alt="book" 
                className='h-[300px] rounded-xl md:h-[500px] mx-10 md:mx-auto'
                />
            </div>

            <div className='flex flex-col gap-5 justify-between mx-10 md:mx-0'>
                <div className='flex flex-col gap-5'>
                    <p> <span className='text-xl text-violet-500 font-bold'>Book Name</span> {data.name} </p>
                    <p> <span className='text-xl text-violet-500 font-bold'>ISBN Number</span> {data.isbn} </p>
                    
                    {
                        data.displayName && <p> <span className='text-xl text-violet-500 font-bold'>Seller</span> {data.displayName} </p>
                    }

                    {
                        data.userEmail && <p> <span className='text-xl text-violet-500 font-bold'>Seller Email Id</span> {data.userEmail} </p>
                    }

                    <p> <span className='text-xl text-violet-500 font-bold'>Price</span> Rs.{data.price} </p>
                </div>

                <button className='bg-violet-500 px-4 py-2 rounded-lg text-white hover:bg-violet-700'>
                    Buy Book
                </button>
            </div>
        </div>
        

    </div>
  )
}

export default BookDetail