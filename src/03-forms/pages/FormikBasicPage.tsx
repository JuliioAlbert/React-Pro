import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface State {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({
    firstName,
    lastName,
    email,
  }: State): FormikErrors<State> => {
    const errors: FormikErrors<State> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 20) {
      errors.firstName = "Must be 20 character or less";
    }

    if (!lastName) errors.lastName = "Required";

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik<State>({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validate,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
