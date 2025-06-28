import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { setGroups } from "../store/groupsSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(setUser(null));
        dispatch(setGroups([]));
    }

    return { logout };
}