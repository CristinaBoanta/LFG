import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(setUser(null));
    }

    return { logout };
}