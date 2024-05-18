import { Metadata } from "next";
import { PhotoGallery } from "@/src/widgets/PhotoGallery/PhotoGallery";

export const metadata: Metadata = {
  title: "Фотогалерея | Areal VR"
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
