import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import promotions from "../../src/shared/data/promotions.json";

export const metadata: Metadata = {
  title: "Акции | Areal VR",
};

export default function News() {
  return (
    <section>
      <h1 className="sectionTitle">
        Акции
      </h1>
      {promotions.map(({ title, image, description, list }) => (
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
