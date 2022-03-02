import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MyInput, MySelect } from "../Components";

import "../styles/styles.css";

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik Abstract Page</h1>
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
            <MyInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Fernando"
            />

            <MyInput label="Last Name" name="lastName" type="text" />

            <MyInput label="Email" name="email" type="email" />

            <MySelect name="jobType" label="JobType">
              <option value="">Pick Something</option>
              <option value="ui/ux">UI/UX</option>
              <option value="developer">DEVELOPER</option>
              <option value="fullstack">FULLSTACK</option>
              <option value="jr">FULLSTACK</option>
            </MySelect>

            <MyCheckbox label=" Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
