import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MyInput, MySelect } from "../Components";
import * as Yup from "yup";

export const DynamicForm = () => {
  const initialValues: { [key: string]: any } = {};

  const requiredFields: { [key: string]: any } = {};

  for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es requerido");
      }

      //Otras Reclas
      if (rule.type === "minLength") {
        schema = schema.min(
          (rule as any).value || 2,
          `Minimo de ${(rule as any).value || 2} caracteres `
        );
      }

      if (rule.type === "email") {
        schema = schema.email("Revisa el formato de email");
      }
    }

    requiredFields[input.name] = schema;
  }

  const validationSchema = Yup.object({ ...requiredFields });

  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(form) => (
          <Form noValidate>
            {formJson.map(
              ({ type, name, placeholder, label, value, options }) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyInput
                      key={name}
                      label={label}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      values={value}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value="" label="Select and Option" />

                      {options?.map(({ id, values }) => {
                        return <option key={id} value={id} label={values} />;
                      })}
                    </MySelect>
                  );
                }

                return <h1>Type: {type} No es soportado</h1>;
              }
            )}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
