import { Card } from "@/src/shared/ui/Card/Card";
import { Metadata } from "next";
import certificates from "../../src/shared/data/certificates.json";

export const metadata: Metadata = {
  title: "Подарочные сертификаты | Areal VR",
  description: "Сертификат на посещение клуба виртуальной реальности - лучший подарок как на день рождения, 8 марта или 23 февраля, так и для просто совместного времяпровождения",
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
