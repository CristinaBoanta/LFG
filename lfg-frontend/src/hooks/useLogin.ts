import { useState } from "react";
import { loginAuth } from "../lib/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

export const useLogin = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await loginAuth(email, password);
            localStorage.setItem('user', JSON.stringify(response.data));
        
            dispatch(setUser(response.data));
        } catch (error: any) {
            const errorMessage = error?.response?.data?.error;
            if(errorMessage && typeof errorMessage === "string") {
                setError(errorMessage);
            }
            setIsLoading(false);
        }
    }

    return { login, isLoading, error }
}