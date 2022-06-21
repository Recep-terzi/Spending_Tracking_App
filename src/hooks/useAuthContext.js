import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("AuthContext is not available");
    }
    return context;
}