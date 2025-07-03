import { UserGroupList } from "../../components/UserGroupList/UserGroupList";
import { Section } from "../../components/Section/Section";

export const Profile = () => {
    return (
        <div>
            <h1 className="mb-4">Profile</h1>

            <div>
                <div className="flex flex-col">
                    <Section className="mb-4">
                        My groups
                    </Section>
                    <UserGroupList />
                </div>
            </div>
        </div>
    )
};