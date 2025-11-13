import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleReset = () => setForm(initialValue);

  return { form, handleChange, handleReset };
};
