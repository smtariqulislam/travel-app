import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase'

export const AuthContext = createContext();




const auth = getAuth(app)
const UserContext = ({children}) => {
    

    const [user, setUser] = useState({ displayName: 'tariqul' });

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout =()=>{
       return signOut(auth)
    }

    //why are we doing this 
    useEffect(()=>{
       const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('auth state change',currentUser)
       })
       return ()=>{
        unsubscribe();
       }

    },[])

   

    const authInfo = {user,createUser,signIn,logout};
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;