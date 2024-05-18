import React from "react";
import s from "../order-form.module.css";

interface SelectDateProps {
  date: {selectDate: string, formatDate: string},
  setDate: React.Dispatch<React.SetStateAction<{selectDate: string, formatDate: string}>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectDate = ({ date, setDate, setError }: SelectDateProps) => {

  const formatDate = (e: { target: { value: string; }; }) => {
    setError("");
    let formattedDate = "";
    const currentDate = new Date(Date.parse(e.target.value));
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    formattedDate = `${currentDate.getDate()} ${month} ${year}, ${day}`;
    setDate({...date, selectDate: e.target.value, formatDate: formattedDate});
  };

  return (
    <div className={`${s.dateArea} ${s.input} ${s.iconDate}`}>
      <label htmlFor="bday">Дата:</label>
      <input
        id="bday"
        type="date"
        // onFocus={(e) => (e.target.type = "date")}
        value={date.selectDate}
        onChange={formatDate}
      />
    </div>
  );
};
