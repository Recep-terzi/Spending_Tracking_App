import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useAuthContext} from './useAuthContext'
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(false);
  const {dispatch} = useAuthContext()
  const signup = async (email, password, displayName) => {
    setError(null);
    setWait(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      if (!res) {
        throw new Error("Üye olma işleminde hata oldu.");
      }
      await updateProfile(res.user, { displayName });
      dispatch({type:'LOGIN',payload:res.user})
      setWait(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setWait(false);
    }
  };

  return { signup, wait, error };
};
