import type { JSX } from "react";
import { GroupList } from "../../components/GroupList/GroupList";
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

    const validationSchema = useValidationSchemaCreateGroup();

    const handleGroupSubmit = async (values: RegisterNewGroupFormValues) => {
        await postNewGroup(values.title, values.description);
    };
    
    return (
        <div className="flex items-center justify-center my-8">
            <div className="w-full">
                <h1 className="text-2xl mb-4">{`{Game name}`} groups</h1>

                <div className="my-3">
                    <Dialog>
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
                                        </Form>
                                    </Formik>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <GroupList />
            </div>
        </div>
    );
};