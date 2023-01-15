import * as Yup from 'yup';

export const newTaskFormValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  description: Yup.string().max(100, 'Must be 100 characters or less')
    .required('Required'),
  img: Yup.string().url(),
  tags: Yup.string()
    .oneOf(['shopping', 'job', 'home', 'other'], 'Invalid Tag Type')
    .required('Required'),
  deadLine: Yup.date()
    .min(new Date(), `Must be ${new Date().toLocaleDateString()} or later`)
    .default(() => new Date(new Date().setDate(new Date().getDate() + 7))),
});
