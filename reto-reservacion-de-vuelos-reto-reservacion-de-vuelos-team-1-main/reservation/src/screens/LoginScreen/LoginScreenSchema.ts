import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const loginScreenSchema = Yup.object({
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8).max(255).required(),
});

export {initialValues, loginScreenSchema};
