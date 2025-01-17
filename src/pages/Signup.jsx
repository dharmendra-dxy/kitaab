import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useFirebase } from '../context/firebase';
import GoogleBtn from '../components/GoogleBtn';


const Signup = () => {

    // fireabse:
    const firebase = useFirebase(); 

    // navigate:
    const navigate = useNavigate();

    // email and password:
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // handleSubmit:
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("creating account..");
        const data = await firebase.signupUserWithEmailAndPassword(email, password);
        console.log("succesfull");
        console.log(data);  
        
        setEmail('');
        setPassword('');
    }

    // useEffect to refirect to home page:
    useEffect(()=> {
        if(firebase.isLoggedIn){
            // navigate to home:
            navigate('/');
        }
    }, [firebase, navigate]);    

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        
        {/* right */}
        <div className='h-full w-[50%]'>
            
            <div className='max-container h-full flex flex-col items-center justify-center max-w-lg'>
                <div className='block lg:hidden'>
                    <h1 className='text-4xl font-bold mb-8 text-center'>Welome to Signup</h1>
                    <p className='text-center mb-4'>
                    Already have account ? 
                    <span onClick={()=>navigate('/login')}
                    className='text-blue-500 font-semibold'
                    >
                    {" "}Login
                    </span> 
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-6 shadow-lg shadow-black px-10 py-10 rounded-xl'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">Email</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='name@gmail.com'
                        className='text-gray-600 px-4 py-2 rounded-lg border border-gray-400'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <input 
                        type="password"
                        placeholder='*******'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className='text-gray-600 px-4 py-2 rounded-lg border border-gray-400'
                        />
                    </div>


                    <button className='text-white bg-green-500 w-full rounded-lg px-4 py-2 font-semibold hover:bg-green-700'
                    onClick={handleSubmit}
                    >
                        Create Account
                    </button>

                    <div className='text-gray-400'>
                        OR
                    </div>

                    <GoogleBtn text='Login with Google' bgColor='bg-green-500'/>
                </div>
            </div>
        </div>

        {/* left */}
        <div className='h-full w-[50%] bg-gradient-to-br from-green-600  to-black hidden lg:block'>
            <div className='flex flex-col flex-1 justify-center items-center h-full gap-10 max-container'>
                <h1 className='text-5xl text-white font-bold'>Welcome to Signup</h1>

                <p className='text-lg text-white font-semibold'>Already have an account ? LogIn</p>

                <button className='border border-white px-6 py-2 rounded-lg text-white hover:border-gray-500 hover:text-black hover:bg-white'
                onClick={()=> navigate('/login')}
                >
                    Login
                </button>
            </div>
        </div>

    </div>
  )
}

export default Signup