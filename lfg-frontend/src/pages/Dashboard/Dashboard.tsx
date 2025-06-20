import type { JSX } from "react";
import { GroupList } from "../../components/GroupList/GroupList";

export const Dashboard = (): JSX.Element => {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="w-full">
                <h1 className="text-2xl mb-4">{`{Game name}`} groups</h1>

                <GroupList />
            </div>
        </div>
    );
};