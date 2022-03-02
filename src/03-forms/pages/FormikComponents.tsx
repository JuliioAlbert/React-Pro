import { Formik, Field, ErrorMessage, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Required"),
          email: Yup.string().email("No es valido").required("Required"),
          terms: Yup.boolean().oneOf([true], "Debe Aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["jr"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">FirstName</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="firstName">LastName</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">FirstName</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label>JobType</label>
            <Field name="jobType" as="select">
              <option value="">Pick Something</option>
              <option value="ui/ux">UI/UX</option>
              <option value="developer">DEVELOPER</option>
              <option value="fullstack">FULLSTACK</option>
              <option value="jr">FULLSTACK</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
