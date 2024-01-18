'use client'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext()
const ContextHome = ({children}) => {
    let [user, setUser] = useState([])
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider()
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
        unsubscribe();
      };
  }, []);

  let value = {
    user, loading,  googleLogin
  }
  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
};

export default ContextHome;