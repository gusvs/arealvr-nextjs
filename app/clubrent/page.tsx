import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import data from "../../src/shared/data/clubrent.json";
import s from './clubrent.module.css';

export const metadata: Metadata = {
  title: "Аренда клуба | Areal VR",
  description: "Проведите семейный праздник, день рождения или корпоратив в клубе Areal VR",
};

export default function Clubrent() {
  return (
    <section>
      <h1 className="sectionTitle">
        Аренда клуба
      </h1>
      <p className={s.description}>
        В нашем клубе вы можете отметить детский день рождения, корпоратив или
        просто весело провести время в кругу друзей. Для больших компаний у нас
        предусмотрена аренда всего клуба, продолжительностью от 2-х
        часов.
      </p>
      <p className={s.description}>В аренду клуба входит:</p>
      {data.map(({ title, image, description, list }) => (
        <Card
          title={title}
          description={description}
          image={image}
          list={list}
          key={image}
        />
      ))}
      <p className={s.description}>
        А также настольные игры и администратор, готовый всегда прийти на помощь
      </p>
    </section>
  );
}
