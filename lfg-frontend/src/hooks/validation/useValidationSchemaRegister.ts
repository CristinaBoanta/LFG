import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  // confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match')
});

const signInSchema = Yup.object().shape({
  email: Yup.string().required('Enter your email'),
  password: Yup.string().required('Enter your password'),
  // rememberMe: Yup.bool()
});

export type RegisterFormData = Yup.InferType<typeof registerSchema>;
export type SignInFormData = Yup.InferType<typeof signInSchema>;

export const useValidationSchemaRegister = () => {
  return registerSchema;
};

export const useValidationSchemaSignIn = () => {
  return signInSchema;
};