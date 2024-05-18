import { Metadata } from "next";
import s from './price.module.css';

export const metadata: Metadata = {
  title: "Цены | Areal VR",
};

export default function Price() {
  return (
    <section>
      <h1 className="sectionTitle">
        Наши цены
      </h1>
      <p className={s.subtitle}>Игра в шлеме виртуальной реальности</p>
      <div className={s.priceBlock}>
        <div className={`${s.cell} ${s.cellTime}`}>30 мин</div>
        <div className={`${s.cell} ${s.cellTime}`}>1 час</div>
        <div className={s.cell}>400</div>
        <div className={s.cell}>700</div>
      </div>
      <p className={s.dopinfo}>*Цена указана в рублях за 1 шлем.</p>
      <p className={s.subtitle}>Аренда всего клуба</p>
      <div className={s.priceBlock}>
        <div className={`${s.cell} ${s.cellTime}`}>2 часа</div>
        <div className={`${s.cell} ${s.cellTime}`}>3 часа</div>
        <div className={`${s.cell} ${s.cellTime}`}>4 часа</div>
        <div className={s.cell}>6900</div>
        <div className={s.cell}>8900</div>
        <div className={s.cell}>10900</div>
      </div>
      <p className={s.dopinfo}>
        *В аренду клуба входит: 4 шлема виртуальной реальности, приставки (PS4 VR и PS3 с
        установкой Guitar Hero), стол 3в1 (футбол, бильярд и аэрохоккей) и
        настольные игры.
      </p>
      <p>Именинникам скидка - 10%</p>
    </section>
  );
}
