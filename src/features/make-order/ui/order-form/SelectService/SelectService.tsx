import React from "react";
import s from "../order-form.module.css";

interface SelectServiceProps {
  service: string;
  setService: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setDuring: React.Dispatch<React.SetStateAction<string>>;
}

const SelectService = ({service, setService, setError, setDuring}: SelectServiceProps) => {

  const onChangeService = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setError('');
    setService(e.target.value);
    if (e.target.value === 'Аренда клуба') {
      setDuring('');
    }
  };

  return (
      <select
        name="service"
        id="service"
        value={service}
        onChange={onChangeService}
        className={`${s.select} ${s.iconService}`}
      >
        <option value="">Услуга:</option>
        <option value="1 шлем">1 шлем</option>
        <option value="2 шлема">2 шлема</option>
        <option value="3 шлема">3 шлема</option>
        <option value="4 шлема">4 шлема</option>
        <option value="Аренда клуба">Аренда клуба</option>
      </select>
  );
};

export default SelectService;