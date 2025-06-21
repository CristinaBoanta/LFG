import type { JSX } from "react";
import { GroupListItem } from "../GroupListItem/GroupListItem";
import { getAllGroups } from "../../lib/api/group";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroups } from "../../store/groupsSlice";
import type { RootState } from "../../store";

export const GroupList = (): JSX.Element => {

  const dispatch = useDispatch();

  const groups = useSelector((state: RootState) => state.groups.groups);
  console.log(groups, ' groups state');

  const fetchGroups = async () => {
    try {
      const response = await getAllGroups();

      dispatch(setGroups(response.data));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, [])

  return (
    <div className="flex flex-col gap-3">
      {groups && groups.map((group, index) => {
         return <GroupListItem key={group._id || index} group={group} />
      })}
    </div>
  );
};