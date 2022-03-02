import { useState } from "react";

export const useForm = <T extends Partial<T>>(initialData: T) => {
  const [formData, setRegisterData] = useState<T>(initialData);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setRegisterData({ ...initialData });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,

    //Functions
    isValidEmail,
    onChange,
    resetForm,
  };
};
