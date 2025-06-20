import { useState } from "react";
import {
    Formik,
    Form,
    Field,
    useFormikContext,
} from 'formik';
import { useValidationSchemaRegister } from "../../hooks/validation/useValidationSchemaAuth";
import { useRegister } from "../../hooks/useRegister";

interface RegisterFormValues {
    email: string;
    password: string;
}

const initialValues: RegisterFormValues = {
    email: '',
    password: ''
};

const RegisterFormFields = () => {
    const { handleChange } = useFormikContext();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleEmail}
                    placeholder="Your email address..."
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    type="password"
                    onChange={handlePassword}
                    placeholder="Choose a password..."
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
        </>
    );
};

export const Register = () => {

    const validationSchema = useValidationSchemaRegister();
    const { register, isLoading, error } = useRegister();

    const handleSubmit = async (values: RegisterFormValues) => {
        await register(values.email, values.password);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <RegisterFormFields />
                    <button disabled={isLoading} type="submit">Submit</button>
                    {error && <div className="text-red-500 border border-red-500">{error}</div>}
                </Form>
            </Formik>
        </div>
    )
}