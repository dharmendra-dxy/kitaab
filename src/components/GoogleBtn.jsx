import React from 'react'
import { useFirebase } from '../context/firebase'

const GoogleBtn = ({text, bgColor}) => {

    const firebase = useFirebase();

    const handleSubmit = async() => {
        const data = await firebase.signinWithGoogle();
        console.log(data);
    }


  return (
    <button className={`text-white ${bgColor} w-full rounded-lg px-4 py-2 font-semibold shadow-lg shadow-slate-400`}
    onClick={handleSubmit}
    >
        {text}
    </button>
  )
}

export default GoogleBtn