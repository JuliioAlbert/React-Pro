import { Formik, Form } from "formik";
import { MyInput } from "../Components";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(d) => console.log(d)}
        validationSchema={Yup.object({
          name: Yup.string().min(2).max(15).required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(6),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Deben ser iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyInput label="Nombre" name="name" />

            <MyInput
              label="Email"
              name="email"
              type="email"
              placeholder="gas@nieto.mx"
            />

            <MyInput label="Password" name="password" type="password" />

            <MyInput label="Password2" name="password2" type="password" />

            <button type="submit">Submit</button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
