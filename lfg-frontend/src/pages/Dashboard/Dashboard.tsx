import type { JSX } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { PublicGroupList } from "../../components/PublicGroupList/PublicGroupList";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/Dialog/Dialog";
import { Formik, Form, Field } from "formik";
import { Button } from "../../components/Button/Button";
import { useValidationSchemaCreateGroup } from "../../hooks/validation/useValidationSchemaGroup";
import { postNewGroup } from "../../lib/api/group";

interface RegisterNewGroupFormValues {
    title: string;
    description: string;
}

const initialValues: RegisterNewGroupFormValues = {
    title: '',
    description: ''
};

export const Dashboard = (): JSX.Element => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [postGroupError, setPostGroupError] = useState<string>("");
    const validationSchema = useValidationSchemaCreateGroup();

    const user = useSelector((state: RootState) => state.auth.user);

    const handleGroupSubmit = async (values: RegisterNewGroupFormValues) => {
        if (!user) {
            setPostGroupError("You must be logged in to submit a group.")
            return;
        }

        try {
            const response = await postNewGroup(values.title, values.description);
            console.log('Response from posting a new group:', response);
            setIsDialogOpen(false);
        } catch (error) {
            console.error('Failed to create group:', error);
        }
    };
    
    return (
        <div className="flex items-center justify-center my-8">
            <div className="w-full">
                <h1 className="text-2xl mb-4">{`{Game name}`} groups</h1>

                <div className="my-3">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger>Create new group</DialogTrigger>
                        <DialogContent className="bg-gray-800 min-h-96">
                            <DialogHeader>
                                <DialogTitle className="mb-4">New Group</DialogTitle>
                                <DialogDescription>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={handleGroupSubmit}
                                        validationSchema={validationSchema}
                                    >
                                        <Form className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="password">Group Title</label>
                                                <Field
                                                    id="title"
                                                    name="title"
                                                    placeholder="Choose a group title..."
                                                    className="border border-gray-300 rounded-md p-2"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="password">Description</label>
                                                <Field
                                                    id="description"
                                                    name="description"
                                                    component="textarea"
                                                    rows={8}
                                                    placeholder="What is your group about?"
                                                    className="border border-gray-300 rounded-md p-2"
                                                />
                                            </div>

                                            <Button type="submit">Create new group</Button>

                                            {postGroupError && <div className="text-red-500">{postGroupError}</div>}
                                        </Form>
                                    </Formik>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <PublicGroupList />
            </div>
        </div>
    );
};