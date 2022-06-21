import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useAuthContext} from './useAuthContext'
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(false);
  const {dispatch} = useAuthContext()
  const login = async (email, password) => {
    setError(null);
    setWait(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      if (!res) {
        throw new Error("Giriş işleminde hata oldu.");
      }
      dispatch({type:'LOGIN',payload:res.user})
      setWait(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setWait(false);
    }
  };

  return { login, wait, error };
};
