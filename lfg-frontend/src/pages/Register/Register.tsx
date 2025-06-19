import { useState } from "react";
import {
    Formik,
    Form,
    Field,
    useFormikContext,
} from 'formik';
import { useValidationSchemaRegister } from "../../hooks/validation/useValidationSchemaRegister";

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
        console.log("Email: ", email);
    }
    
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setPassword(e.target.value);
        console.log("Password: ", password);
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

    const handleSubmit = async (values: RegisterFormValues) => {
        // console.log("form submit triggered");
        // console.log("Email from Formik:", values.email);
        // console.log("Password from Formik:", values.password);
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
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}