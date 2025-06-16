import type { JSX } from "react";
import { GroupListItem } from "../GroupListItem/GroupListItem";

export const GroupList = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-3">
            <GroupListItem />
            <GroupListItem />
            <GroupListItem />
            <GroupListItem />
            <GroupListItem />
            <GroupListItem />
        </div>
    );
};