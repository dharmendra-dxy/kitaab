import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase';
import MyBookCard from '../components/MyBookCard';

const ViewBooks = () => {

    const firebase = useFirebase();
    const [books, setBooks] = useState([]);


    useEffect(()=> {
      if(firebase.isLoggedIn){
        firebase.fetchMyBooks(firebase.user.uid).then((books)=> setBooks(books.docs));
      }

    },[firebase]);


  return (
    <div>
      <h1 className='text-center mt-5 text-4xl font-bold'>My  <span className='text-violet-500'>Books</span></h1>

      {/* <div className='text-md text-center mt-20'>You Don't have books listed</div> */}

      <div className='flex flex-col flex-wrap items-center justify-center gap-10 mt-5'>
      {
        books.map((book) => (
          <MyBookCard 
          key={book.id}
          bookId={book.id}
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

export default ViewBooks