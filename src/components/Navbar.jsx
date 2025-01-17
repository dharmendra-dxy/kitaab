import React from 'react'
import { useFirebase } from '../context/Firebase.jsx';
import { useNavigate } from 'react-router';

const Navbar = () => {

    const fireabse = useFirebase();
    const nav = useNavigate();

    const navLinks = [
        {name : "Home",  links: '/'},
        {name : "Add Listing",  links: '/book/list'},
        {name : "My Books",  links: '/book/mybooks'},
    ];

    // handleUserSignout:
    const handleUserSignout = ()=> {
        return fireabse.signoutUser();
    }

  return (
    <div className='w-full bg-violet-500 '>
        <div className='max-container py-6 text-white flex items-center justify-between gap-10'>
            <div className='flex items-center gap-10'>
                <div>
                    <p className='text-2xl font-bold hover:border-b-2 cursor-pointer'>KITAAB</p>
                </div>
                <div className='flex items-center justify-center gap-6 text-lg '>
                    {
                        navLinks.map((item) => (
                            <p 
                            key={item.name}
                            onClick={()=> nav(`${item.links}`)}
                            className='cursor-pointer hover:border-b-2'
                            > 
                            {item.name} 
                            </p>
                        ))
                    }
                </div>
            </div>

            <div>   
                <button className='bg-white text-violet-500 px-4 py-2 outline-none rounded-lg font-bold hover:text-white hover:border hover:border-white hover:bg-violet-500'
                onClick={handleUserSignout}
                >
                    Logout
                </button>
            </div>
        </div>


    </div>
  )
}

export default Navbar