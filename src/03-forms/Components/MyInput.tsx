import { useField, ErrorMessage } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  [x: string]: any;
}

export const MyInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type={props.type}
        className={props.className}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error"
      />
    </>
  );
};
