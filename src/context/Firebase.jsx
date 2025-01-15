import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,

} from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs,getDoc, doc } from "firebase/firestore";


// create context:
const FirebaseContext = createContext(null);


// firebase config:
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


// custom firebase hook:
export const useFirebase = () => useContext(FirebaseContext);

// app instance:
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


// googleProvider instance:
const googleProvider= new GoogleAuthProvider();


// provider:
export const FirebaseProvider = (props) => {

    // track user:
    const [user, setUser] = useState(null);

    useEffect(()=> {
        onAuthStateChanged(firebaseAuth, (user) => {
            console.log("user: ", user);
            if(user) setUser(user);
            else setUser(null);
        })
    }, [])


    // signupUserWithEmailAndPassword:
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    // signinUserWithEmailAndPassword:
    const signinUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    // signinWithGoogle:
    const signinWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    }

    // signourUser:
    const signoutUser = () => {
        signOut(firebaseAuth);
    }

    // isLoggedIn ??
    const isLoggedIn = user ? true: false;

    // handleCreateNewLisiting:
    const handleCreateNewLisiting = async (name, isbn, price) => {
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbn,
            price,
            imgUrl: 'https://t3.ftcdn.net/jpg/00/28/90/20/360_F_28902059_Kv9y7FKcnkZY6ho7tfSq4YxPm1oq0U4B.jpg',
            userId: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    }

    // list all books:
    const listAllBooks = () => {
        return getDocs(collection(firestore, 'books'));
    }

    // getBookById:
    const getBookById = async(id) => {
        const docRef = doc(firestore, 'books', id);
        const result = await getDoc(docRef);
        return result;
    }


    return(
        <FirebaseContext.Provider 
        value={{
            signupUserWithEmailAndPassword, 
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            isLoggedIn,
            handleCreateNewLisiting,
            listAllBooks,
            signoutUser,
            getBookById,
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}



