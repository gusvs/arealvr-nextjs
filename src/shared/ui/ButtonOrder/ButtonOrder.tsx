// 'use client';
import React from 'react';
import s from './ButtonOrder.module.css';

interface ButtonOrderProps {
  onShowModal: () => void;
}

function ButtonOrder({onShowModal}: ButtonOrderProps) {
  return (
    <button onClick={onShowModal} className={s.buttonOrder}>
      Забронировать
    </button>
  );
}

export default ButtonOrder;