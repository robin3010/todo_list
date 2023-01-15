import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { newTaskFormValidationSchema } from './validator';

const initialValues = {
  title: '',
  description: '',
  img: '',
  deadLine: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().slice(0, 10),
  tags: '',
};

export function NewTaskForm() {
  const submitHandler = (values) => {
    console.log({ values });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newTaskFormValidationSchema}
      onSubmit={submitHandler}
    >
      <div className="d-flex">
        <Form
          className="d-flex flex-column gap-2 my-3 mx-auto"
          style={{ minWidth: '60vw', maxWidth: '95vw' }}
        >
          <Field name="title" type="text" placeholder="task title" />
          <ErrorMessage component="p" className="text-danger" name="title" />

          <Field
            name="description"
            type="text"
            placeholder="task description"
          />
          <ErrorMessage component="p" className="text-danger" name="description" />

          <Field name="img" type="text" placeholder="task image url" />
          <ErrorMessage component="p" className="text-danger" name="img" />

          <Field
            name="deadLine"
            type="date"
          />
          <ErrorMessage component="p" className="text-danger" name="deadLine" />

          <Field name="tags" as="select" className="my-select">
            <option value="">Select a Tag</option>
            <option value="shopping">Shopping</option>
            <option value="job">Job</option>
            <option value="home">Home</option>
            <option value="other">Other</option>
          </Field>

          <button type="submit" className="btn btn-success">
            Create
          </button>
        </Form>
      </div>
    </Formik>
  );
}
