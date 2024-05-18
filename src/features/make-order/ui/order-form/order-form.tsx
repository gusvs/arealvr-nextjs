'use client';
import s from "./order-form.module.css";
import { FormEvent, useState } from "react";
import { InputName } from "./InputName/InputName";
import { InputPhone } from "./InputPhone/InputPhone";
import SelectService from "./SelectService/SelectService";
import SelectDuring from "./SelectDuring/SelectDuring";
import { SelectDate } from "./SelectDate/SelectDate";
import InputMessage from "./InputMessage/InputMessage";

interface OrderFormProps {
  closingModal: () => void;
}

export const OrderForm = ({closingModal}: OrderFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState({selectDate: '', formatDate: ''});
  const [service, setService] = useState('');
  const [during, setDuring] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !phone || !date || !service || !during) {
      setError('Заполните все поля');
      return;
    }

    fetch(`:3000/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        date: date.formatDate,
        service: service,
        during: during,
        message: message,
        created: new Date().toString()
      })
    })
      .then((response) => {
      if (response.status === 200) {
        alert(
          'Сообщение отправлено, наш администратор перезвонит вам в ближайшее время для подтверждения заявки.',
        );
        closingModal();
      }})
      .catch(e => console.log(e.message));
  }

  return (
      <form
        onSubmit={handleSubmit}
        id="contact-form"
        method="POST"
        className={s.form}
      >
        <h4 className={s.title}>Заполните контактную форму</h4>
        <span
          onClick={() => closingModal()}
          className={`${s.buttonClose} pink`}
        >
        X
      </span>
        {error && <p>{error}</p>}
        <InputName name={name} setName={setName} setError={setError} />
        <InputPhone phone={phone} setPhone={setPhone} setError={setError} />
        <SelectDate date={date} setDate={setDate} setError={setError} />
        <SelectService service={service} setService={setService} setError={setError} setDuring={setDuring} />
        <SelectDuring during={during} service={service} setDuring={setDuring} setError={setError} />
        <InputMessage message={message} setMessage={setMessage} />
        <button type="submit" className={`${s.button} ${s.formButton}`}>
          Отправить
        </button>
      </form>
  );
};