import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { setUserGroups } from "../store/userGroupsSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(setUser(null));
        dispatch(setUserGroups([]));
    }

    return { logout };
}