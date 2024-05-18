import { Metadata } from "next";
import s from "./contacts.module.css";

export const metadata: Metadata = {
  title: "Контакты | Areal VR",
};
export default function Contacts() {
  return (
    <section>
      <h2 className="sectionTitle">Контакты</h2>
      <div className={s.contacts}>
        <p className={s.adress}>
          Адрес:{" "}
          <span className={s.colored}>
            г. Челябинск
            <br /> пр. Комсомольский 39, 2 этаж.
          </span>
        </p>
        <p className={s.time}>
          Время работы:{" "}
          <span className={s.colored}>
            с 10.00 до 22.00
            <br />
            по предварительной записи
          </span>
        </p>
        <p className={s.phones}>
          Тел./Whatsapp:{" "}
          <span className={s.colored}>
            <a href="tel:+79962335623">+7 996 233 56 23</a>
          </span>
        </p>
        <p className={s.socialIcons}>
          Вконтакте:{" "}
          <a className={s.colored} href="https://vk.com/areal_vr">
            vk.com/areal_vr
          </a>
        </p>
        <iframe
          title="This is a unique title"
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=31357531423"
          width="100%"
          height="400"
          frameBorder="0"
        />
      </div>
    </section>
  );
}
