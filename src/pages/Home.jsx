import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import { useFirebase } from '../context/Firebase.jsx'
import Card from '../components/Card';
import { useNavigate } from 'react-router';

const Home = () => {
  const firebase = useFirebase();
  const nav = useNavigate();

  const [books, setBooks] = useState([]);

  // list all books:
  useEffect(()=> {
    firebase.listAllBooks().then((books)=> setBooks(books.docs));

  }, []);


  if(!firebase.isLoggedIn){
    return (
      <div className='w-full h-screen flex items-center justify-center'>

        <div className=''>
          <h1 className='text-8xl font-bold '>Kitaa<span className='text-violet-500'>b</span></h1>
          <p className='text-center mt-4 text-lg font-semibold'>
            Buy and sell book as per your needs
          </p>

          <div className='flex justify-center gap-5 mt-5'>
            <button className='bg-violet-500 text-white px-4 py-2 rounded-lg hover:border-2'
            onClick={()=> nav('/login')}
            >
              Login
            </button>

            <button className='border-2 border-violet-500 text-violet-500 px-4 py-2 rounded-lg'
            onClick={()=> nav('/signup')}
            >
              Signup
            </button>
          </div>
        </div>
        
      </div>
    )
  }

  return (
    <div>

        <Navbar/>

        <div className='text-center mt-5'>
          <h1 className='text-lg'>Hi, 
            <span className='font-bold text-violet-600'> {firebase.user.email}</span>
          </h1>
        </div>

        <div className='w-full max-container flex items-center justify-center gap-10 mt-10 flex-wrap'>

          {
            books.map((book) => (
              <Card 
              key={book.id}
              id={book.id}
              name={book.data().name}
              isbn={book.data().isbn}
              seller={book.data().displayName}
              email={book.data().userEmail}
              price={book.data().price}
              />
            ))
          }
        </div>


    </div>
  )
}

export default Home