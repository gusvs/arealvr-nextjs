import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import data from "../../src/shared/data/news.json";

export const metadata: Metadata = {
  title: "Новости | Areal VR",
  description: "Новости, игровые новинки и важные события нашего клуба",
};

export default function News() {
  return (
    <section>
      <h1 className="sectionTitle">
        Новости
      </h1>
      {data.map(({ title, image, description, date }) => (
        <Card
          title={title}
          description={description}
          image={image}
          date={date}
          key={image}
        />
      ))}
    </section>
  );
}
