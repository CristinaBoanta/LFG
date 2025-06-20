import * as Yup from 'yup';

const newGroupSchema = Yup.object().shape({
  title: Yup.string().required('Group title is required'),
  description: Yup.string().required('Group description is required'),
});

export type CreateNewGroup = Yup.InferType<typeof newGroupSchema>;

export const useValidationSchemaCreateGroup = () => {
  return newGroupSchema;
};