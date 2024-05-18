import React from 'react';
import s from "../order-form.module.css";

interface InputMessageProps {
  message: string;
  setMessage: (message: string) => void;
}

const InputMessage = ({message, setMessage}: InputMessageProps) => {

  return (
    <textarea
      maxLength={150}
      className={`${s.input} ${s.textarea} ${s.iconMessage}`}
      placeholder="Примечания: желаемое время посещения..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
};

export default InputMessage;