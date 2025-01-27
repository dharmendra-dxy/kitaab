import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebase.jsx';
import GoogleBtn from '../components/GoogleBtn';
import { useNavigate } from 'react-router';

const Login = () => {
    
    // fireabse:
    const firebase = useFirebase();

    // navigation:
    const navigate = useNavigate();

    // email and password:
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    // handleSubmit:
    const handleSubmit = async (e) => {
        // console.log(email, password)
        e.preventDefault();
        await firebase.signinUserWithEmailAndPassword(email, password)
        .then()
        .catch(e=> setError(e));


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

        {/* left */}
        <div className='h-full w-[50%] bg-gradient-to-br from-red-500  to-black hidden lg:block'>
            <div className='flex flex-col flex-1 justify-center items-center h-full gap-10 max-container'>
                <h1 className='text-5xl text-white font-bold'>Welcome to Login</h1>

                <p className='text-lg text-white font-semibold'>Don't have an account ? SignUp</p>

                <button className='border border-white px-6 py-2 rounded-lg text-white hover:border-gray-500 hover:bg-white hover:text-black'
                onClick={()=> navigate('/signup')}
                >
                    Signup
                </button>
            </div>
        </div>

        {/* right */}
        <div className='h-full w-[50%]'>
            
            <div className='max-container h-full flex flex-col items-center justify-center max-w-lg'>
                <div className='block lg:hidden'>
                    <h1 className='text-4xl font-bold mb-8 text-center'>Welome to Login</h1>
                    <p className='text-center mb-4'>
                    Don't have account ? 
                    <span onClick={()=>navigate('/signup')}
                    className='text-blue-500 font-semibold'
                    >
                    {" "}Signup
                    </span> 
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-6 shadow-lg shadow-black px-10 py-10 rounded-xl'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">Email</label>
                        <input 
                        type="email"
                        placeholder='name@gmail.com'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
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


                    <div className='w-full'>
                        <button className='text-white bg-red-500 w-full rounded-lg px-4 py-2 font-semibold hover:bg-red-700'
                        onClick={handleSubmit}
                        >
                            Login
                        </button>

                        {error && <p className='text-red-600 text-sm font-semibold mt-2 text-center'>
                            Invalid auth credentials
                        </p>
                        }
                    </div>

                    <div className='text-gray-400'>
                        OR
                    </div>

                    <GoogleBtn text='Login with Google' bgColor="bg-red-500"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login