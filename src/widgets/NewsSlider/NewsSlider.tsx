'use client';
import s from "./NewsSlider.module.css";
import ImageGallery from "react-image-gallery";

export const NewsSlider = () => {
  const images = [
    {
      original: '',
      renderItem: () => {
        return <>
          <img className={"image-gallery-image"} src="/images/news/PrivateProperty.jpg" alt="PrivateProperty" />
          <span
            style={{ color: "red" }}
            className={`image-gallery-description ${s.imageGalleryDescription}`}
          >
          Новая игра в нашей коллекции - многопользовательский VR-шутер про зомби Private Property
        </span>
        </>;
      },
    },
    {
      original: '',
      renderItem: () => {
        return <>
          <img className={"image-gallery-image"} src="/images/news/ArizonaSunshine2.jpg" alt="ArizonaSunshine2" />
          <span
            style={{ color: "gold" }}
            className={`image-gallery-description ${s.imageGalleryDescription}`}
          >
          Новинка: Arizona Sunshine 2 — современное продолжение полюбившегося фанатам VR-апокалипсиса
        </span>
        </>;
      }
    },
    {
      original: '',
      renderItem: () => {
        return <>
          <img className={"image-gallery-image"} src="/images/news/ElvenAssassinRiseOfDarkness.jpg"
               alt="ElvenAssassinRiseOfDarkness" />
          <span
            style={{ color: "deepskyblue" }}
            className={`image-gallery-description ${s.imageGalleryDescription}`}
          >
          Во всеми любимой игре, Elven Assassin, открыты новые локации The Rise of Darkness
        </span>
        </>;
      }
    }
  ];


  return (
    <div className={s.NewsSlider}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={false}
        slideDuration={300}
        slideInterval={7000}
        autoPlay={true}
        showThumbnails={false}
      />
    </div>
  );
};