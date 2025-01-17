import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFirebase } from '../context/Firebase.jsx';

const ViewBooksOrders = () => {

    const firebase = useFirebase();
    const {bookId} = useParams();
    // console.log("book id: ", bookId);

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        firebase.getBookOrder(bookId).then((order)=> setOrders(order.docs));
    }, []);

    // console.log(orders);


  return (
    <div>

      <div>
        <h1 className='text-2xl text-center font-bold mt-10'>
          Kitaab <span className='text-violet-500'>Ordered</span>
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row mt-6 md:flex-wrap'>
        {orders.length==0 ? (<div className='text-lg font-semibold mt-10'>No Orders on this book</div>):(<></>)}
      {
        orders.map((order) => {
          const data = order.data();
          return(
            <div className='bg-gray-50 shadow-lg p-4 rounded-lg m-4 w-56'>
              <h3 className='text-md font-bold text-violet-500'>Customer details :</h3>
              {
                data.displayName && <p>{data.displayName}</p>
              }
              <p>{data.userEmail}</p>

              <h3 className='text-md font-bold text-violet-500 mt-4'>Quantity :</h3>
              <p>{data.quantity}</p>
            </div>
          )
        })
      } 
      </div>
       

    </div>
  )
}

export default ViewBooksOrders