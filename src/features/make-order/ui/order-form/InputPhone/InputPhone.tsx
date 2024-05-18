import React, { ChangeEvent, KeyboardEvent, useCallback } from "react";
import s from "../order-form.module.css";

interface InputPhoneProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputPhone = ({phone, setPhone, setError}: InputPhoneProps) => {

  const getInputNumbersValue = (input: HTMLInputElement) => input.value.replace(/\D/g, "");

  const onKeyDown = (e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const input = e.target;
    if (key === "Backspace" && getInputNumbersValue(input).length === 1) setPhone("");
  };

  const validating = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    const value = e.target;
    let inputNumbersValue = getInputNumbersValue(value);
    let formattedInputValue = "";

    if (!inputNumbersValue) {
      setPhone("");
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      // Russian phone number
      if (inputNumbersValue[0] === "9") inputNumbersValue = `7${inputNumbersValue}`;
      const firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
      formattedInputValue = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }

    } else {
      // Not Russian phone number
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    setPhone(formattedInputValue);
  };

  const checkingLength = useCallback(() => {
    setError("");
    if (phone[0] === "8" && phone.length < 17) {
      setError("Неполный номер телефона");
    }
    if (phone[1] === "7" && phone.length < 18) {
      setError("Неполный номер телефона");
    }
  }, [phone, setError]);

  return (
      <input
        type="tel"
        maxLength={18}
        value={phone}
        onChange={validating}
        onBlur={checkingLength}
        onKeyDown={onKeyDown}
        className={`${s.input} ${s.iconPhone}`}
        placeholder="Ваш телефон"
      />
  );
};