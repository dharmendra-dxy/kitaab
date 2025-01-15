import React from 'react'

const Card = ({name, isbn, seller, price}) => {
  return (
    <div className=' w-full border max-w-sm border-black  rounded-lg '>
        <div className='flex items-center justify-center'>
            <img 
            src="https://t3.ftcdn.net/jpg/00/28/90/20/360_F_28902059_Kv9y7FKcnkZY6ho7tfSq4YxPm1oq0U4B.jpg" 
            alt="img" 
            className='overflow-hidden object-cover h-[300px]'
            />
        </div>

        <div className='my-4 mx-4'>
            <h3 className='text-xl font-bold uppercase'>{name}</h3>
            <p className='mt-2'>ISBN Number: {isbn}</p>

            {seller && <p className='mt-2'>Seller: {seller}</p>}
            <p className='mt-2'>Price: {price}</p>
            <button className='text-white font-bold text-center bg-violet-500 w-full py-2 rounded-lg mt-2'>View More</button>
        </div>
        
    </div>
  )
}

export default Card