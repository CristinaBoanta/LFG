import type { JSX } from "react";
import { GroupList } from "../../components/GroupList/GroupList";

export const Dashboard = (): JSX.Element => {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="flex-grow w-full max-w-7xl">
                <h2 className="text-2xl mb-4">Groups</h2>

                <GroupList />
            </div>
        </div>
    );
};