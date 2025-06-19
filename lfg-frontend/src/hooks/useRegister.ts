import { useState } from "react";
import { registerAuth } from "../lib/api/auth";

export const useRegister = () => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const register = async (email: string, password: string) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await registerAuth(email, password);
            console.log(response);
        } catch (error) {
            setIsLoading(false);
            setError("Could not create an account");
            console.log(error);
        }
    }

    return { register, isLoading, error }
}