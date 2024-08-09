import { Metadata } from "next";
import { PhotoGallery } from "@/src/widgets/PhotoGallery/PhotoGallery";

export const metadata: Metadata = {
  title: "Фотогалерея | Areal VR",
  description: "Фотографии игрового процесса наших гостей",
};

export default function PhotoGalleryPage() {
  return (
    <section>
      <h1 className="sectionTitle">
        Фотогалерея
      </h1>
      <PhotoGallery />
    </section>
  );
}
