import { useState } from "react";
import { registerAuth } from "../lib/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

export const useRegister = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const register = async (email: string, password: string) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await registerAuth(email, password);
            localStorage.setItem('user', JSON.stringify(response.data));

            console.log({response});

            // implement some redux action here
            dispatch(setUser(response.data));
        } catch (error: any) {
            const errorMessage = error?.response?.data?.error;
            if(errorMessage && typeof errorMessage === "string") {
                setError(errorMessage);
            }
            setIsLoading(false);
        }
    }

    return { register, isLoading, error }
}