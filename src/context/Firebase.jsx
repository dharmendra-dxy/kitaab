import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,

} from "firebase/auth";

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

// firbase app instance:
const firebaseApp = initializeApp(firebaseConfig);

// auth instance:
const firebaseAuth = getAuth(firebaseApp);

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

    // isLoggedIn ??
    const isLoggedIn = user ? true: false;


    return(
        <FirebaseContext.Provider 
        value={{
            signupUserWithEmailAndPassword, 
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            isLoggedIn,
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}



