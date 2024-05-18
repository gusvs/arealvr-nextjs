import React, { useCallback } from "react";
import s from '../order-form.module.css';

interface InputNameProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputName = ({ name, setName, setError }: InputNameProps) => {

  const textUppercase = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const value = e.target.value;
    const name = value.substring(0, 1).toUpperCase() + value.substring(1);
    setName(name);
  };

  const checkingLength = useCallback(() => {
    setError("");
    if (name.length === 1) {
      setError("Слишком короткое имя");
    }
  }, [name.length, setError]);

  return (

    <input
      className={`${s.input} ${s.iconName}`}
      type={"text"}
      maxLength={25}
      value={name}
      onChange={textUppercase}
      onBlur={checkingLength}
      placeholder="Ваше имя"
    />
  );
};