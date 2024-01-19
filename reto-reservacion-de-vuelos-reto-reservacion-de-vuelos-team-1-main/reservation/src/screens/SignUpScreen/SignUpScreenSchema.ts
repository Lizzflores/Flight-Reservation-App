import * as Yup from 'yup';

const initialValues = {
  email: '',
  name: '',
  password: '',
  privacyTerms: false,
  updateProducts: false,
};

const signUpSchema = Yup.object({
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8).max(255).required(),
});

export {initialValues, signUpSchema};
