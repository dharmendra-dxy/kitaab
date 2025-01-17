import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase.jsx';
import { useNavigate } from 'react-router';

const Lists = () => {

    const firebase = useFirebase();
    const nav = useNavigate();

    const [name, setName] = useState('');
    const [isbnNumber, setIsbnNumber] = useState('');
    const [price, setPrice] = useState('');

    // handleSubmit:
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data= await firebase.handleCreateNewLisiting(name, isbnNumber, price);

        alert("Bookd listed Succesfully");

        setName("");
        setIsbnNumber("");
        setPrice("");
        nav('/');
    }

  return (
    <div className='w-full h-screen bg-gradient-to-br from-violet-500 to-violet-900 text-white'>
        <div className='max-container px-4 py-4'>

            <h1 className='text-4xl font-bold uppercase mt-6'>Add Book Details </h1>

            <form className='flex flex-col gap-5 pt-10'>
                <div className='flex flex-col justify-center gap-2'>
                    <label className='text-lg'>Enter name of the Book</label>
                    <input 
                    type="text" 
                    placeholder='eg. 50 Rules of money making'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    className='px-4 py-2 rounded-lg border-none text-black'
                    />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <label className='text-lg'>Enter Book ISBN Number</label>
                    <input 
                    type="text" 
                    placeholder='eg. 123423467'
                    value={isbnNumber}
                    onChange={(e)=> setIsbnNumber(e.target.value)}
                    className='px-4 py-2 rounded-lg border-none text-black'
                    />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <label className='text-lg'>Enter Price of the book</label>
                    <input 
                    type="text" 
                    placeholder='eg. 500rs'
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    className='px-4 py-2 rounded-lg border-none text-black'
                    />
                </div>

                <div className='flex items-center justify-center mt-10'>
                    <button className='font-semibold max-w-md border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-violet-500'
                    onClick={handleSubmit}
                    > 
                        Add Book
                    </button>
                </div>
            </form>

        </div>


    </div>
  )
}

export default Lists