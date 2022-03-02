import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export interface Data {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterPage = () => {
  const {
    onChange,
    name,
    email,
    password,
    password2,
    formData,
    resetForm,
    isValidEmail,
  } = useForm<Data>({
    email: "",
    name: "",
    password: "",
    password2: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(ev) => onChange(ev)}
          className={`${name.trim().length <= 0 && "has-error"}    `}
        />

        {name.trim().length <= 0 && <span>Este Campo es necesario</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />

        {password.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La Contraseña debe tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat"
          name="password2"
          value={password2}
          onChange={onChange}
        />

        {password.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password2.trim().length > 0 && password !== password2 && (
          <span>Las Contraseñas deben ser Iguales</span>
        )}

        <button type="submit">Enviar</button>

        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
