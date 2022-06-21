import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import {useAuthContext} from './useAuthContext'
export const useLogout = () => {
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(false);
  const {dispatch} = useAuthContext()
  const logout = async () => {
    setError(null);
    setWait(true);
    try {
      await signOut(auth);
      dispatch({type:'LOGOUT'})
      setWait(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setWait(false);
    }
  };

  return { logout, wait, error };
};
