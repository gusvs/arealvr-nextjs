import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import data from "../../src/shared/data/main.json";
import { NewsSlider } from "@/src/widgets/NewsSlider/NewsSlider";
import { GamesGenres } from "@/src/widgets/GamesGenres/GamesGenres";

export const metadata: Metadata = {
  title: "AREAL VR - Виртуальная реальность в Челябинске",
  description:
    "Максимальное погружение в десятки виртуальных миров на любой вкус! Отличное место для любого праздника, у нас вы найдете много игровых локаций, красивые фотозоны и вкусный кофе!"
};

export default function Main() {
  return (
    <section>
      <h1 className="sectionTitle">
        AREAL VR - Мир, в котором подвластно все!
      </h1>
      <NewsSlider />
      <GamesGenres />
      {data.map(({ title, image, description, list }) => (
        <Card
          title={title}
          description={description}
          image={image}
          list={list}
          key={image}
        />
      ))}
    </section>
  );
}
