import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const signUpWithCreateUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth?.currentUser, profile)
    }

    const logIn = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = (provider) =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        })

        return ()=>unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        signUpWithCreateUser,
        updateUserProfile,
        logIn,
        loginWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;