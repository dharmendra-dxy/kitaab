import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFirebase } from '../context/firebase';

const ViewBooksOrders = () => {

    const firebase = useFirebase();
    const {bookId} = useParams();
    console.log("book id: ", bookId);

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        firebase.getBookOrder(bookId).then((orders)=> console.log(orders.docs));
    }, []);
    

  return (
    <div>
        <h1 className='text-2xl text-center font-bold mt-10'>
            Kitaab Ordered -   
            <span className='text-violet-500'> learn dsa</span>
        </h1>
    </div>
  )
}

export default ViewBooksOrders