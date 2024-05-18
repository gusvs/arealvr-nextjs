import React from "react";
import s from "../order-form.module.css";

interface SelectServiceProps {
  during: string;
  service: string;
  setDuring: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const SelectDuring = ({during, service, setDuring, setError}: SelectServiceProps) => {

  const onChangeDuring = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setError('');
    setDuring(e.target.value);
    if (e.target.value === '') {
      setError("Выберите продолжительность");
    }
  };

  return (
      <select
        name="during"
        id="during"
        onChange={onChangeDuring}
        value={during}
        className={`${s.select} ${s.iconDuring}`}
      >
        <option value="">Продолжительность</option>
        <option disabled={service === 'Аренда клуба'} value="30 минут">30 минут</option>
        <option disabled={service === 'Аренда клуба'} value="1 час">1 час</option>
        <option disabled={service === 'Аренда клуба'} value="1 час 30 минут">1 час 30 минут</option>
        <option value="2 часа">2 часа</option>
        <option value="3 часа">3 часа</option>
        <option value="4 часа">4 часа</option>
        <option value="5 часов">5 часов</option>
      </select>
  );
};

export default SelectDuring;