import { UserGroupList } from "../../components/UserGroupList/UserGroupList";
import { Section } from "../../components/Section/Section";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export const Profile = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div>
            <h1 className="mb-4">Profile</h1>

            <div>
                <div className="flex flex-col">
                    <Section className="mb-4">
                        <p>My data</p>

                        <span>{user && user.username}</span>

                        <div className="flex flex-col gap-4">
                            {user && user.email}
                        </div>
                    </Section>
                    <UserGroupList />
                </div>
            </div>
        </div>
    )
};