import { UserGroupList } from "../../components/UserGroupList/UserGroupList";

export const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>

            <div>
                <h1>My groups</h1>

                <div className="flex flex-col">
                    <UserGroupList />
                </div>
            </div>
        </div>
    )
};