import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useFirebase } from '../context/Firebase.jsx';
import { useNavigate } from 'react-router';

const BookDetail = () => {

    const nav = useNavigate();
    const firebase = useFirebase();
    const {bookId} = useParams();

    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState("");

    useEffect(()=>{
        firebase.getBookById(bookId).then((val) => setData(val.data()));
    }, []);

    // hanldePlaceOrder:
    const hanldePlaceOrder = async () => {
       const result = await firebase.placeBookOrder(bookId, quantity);
       console.log("Order placed: ", result);
       setQuantity("");
       alert("Book has been ordered succefully");
       nav('/');
    }

    if(data==null) return (
        <div className='w-full h-screen flex items-center justify-center'>
            <h1 className='text-2xl font-bold'>Loading....</h1>
        </div>
    )

  return (
    <div className='max-container md:mt-10 mt-2'>
        <h1 className='text-center font-bold text-4xl mt-4'>{data.name} <span className='text-violet-500'>Kitaab</span></h1>

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

                <div>
                    <input 
                    type='number'
                    value={quantity} 
                    onChange={(e)=> setQuantity(e.target.value)}
                    placeholder='Select Book Quantity...'
                    className='w-full px-4 py-2 border border-black rounded-lg mb-4'
                    />

                    <button className='bg-violet-500 px-4 py-2 rounded-lg text-white hover:bg-violet-700 w-full'
                    onClick={hanldePlaceOrder}
                    >
                        Buy Book
                    </button>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default BookDetail