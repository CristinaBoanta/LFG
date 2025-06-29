import type { JSX } from "react";
import { getUserGroups } from "../../lib/api/group";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserGroups } from "../../store/userGroupsSlice";
import type { RootState } from "../../store";
import { UserGroupListItem } from "../UserGroupListItem/UserGroupListItem";

export const UserGroupList = (): JSX.Element => {

  const dispatch = useDispatch();

  const groups = useSelector((state: RootState) => state.userGroups.groups);
  const user = useSelector((state: RootState) => state.auth.user);

  const fetchGroups = async () => {
    try {
      const response = await getUserGroups();
      dispatch(setUserGroups(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchGroups();
    }
  }, [user])

  return (
    <div className="flex flex-col gap-3">
      {groups && groups.map((group, index) => {
         return <UserGroupListItem key={group._id || index} group={group} />
      })}
    </div>
  );
};