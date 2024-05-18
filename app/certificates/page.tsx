import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import certificates from "../../src/shared/data/certificates.json";

export const metadata: Metadata = {
  title: "Подарочные сертификаты | Areal VR",
};

export default function CertificatePage() {
  return (
    <section>
      <h1 className="sectionTitle">
        Подарочные сертификаты
      </h1>
      {certificates.map(({ title, image, description, list, items }) => (
        <Card
          title={title}
          description={description}
          image={image}
          list={list}
          items={items}
          key={image}
        />
      ))}
    </section>
  );
}
