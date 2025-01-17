import React from 'react'
import { useNavigate } from 'react-router'

const MyBookCard = ({bookId, name, isbn, price}) => {

    const nav= useNavigate();


  return (
    <div className=' w-full border border-black p-4 max-container rounded-lg'>
        <h1 className='text-2xl font-bold text-violet-500 uppercase'>{name}</h1>
        <p className='mt-2 font-semibold text-md'>ISBN: {isbn}</p>
        <p className='mt-2 font-semibold text-md'>Price: Rs. {price}</p>
        <button 
        className='bg-violet-500 px-4 py-2 rounded-lg text-white mt-2 hover:bg-violet-800'
        onClick={()=> nav(`/book/mybooks/${bookId}`)}
        >
            Check Orders Details
            </button>
    </div>
  )
}

export default MyBookCard