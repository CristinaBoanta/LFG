import type { JSX } from "react";
import { getAllGroups } from "../../lib/api/group";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroups } from "../../store/groupsSlice";
import type { RootState } from "../../store";
import { UserGroupListItem } from "../UserGroupListItem/UserGroupListItem";

export const UserGroupList = (): JSX.Element => {

  const dispatch = useDispatch();

  const groups = useSelector((state: RootState) => state.groups.groups);
  const user = useSelector((state: RootState) => state.auth.user);

  const fetchGroups = async () => {
    try {
      const response = await getAllGroups();
      dispatch(setGroups(response.data));
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