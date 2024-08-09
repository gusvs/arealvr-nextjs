"use client";
import ImageGallery from "react-image-gallery";
import s from "./PhotoGallery.module.css";

export const PhotoGallery = () => {
  const images = [
    {
      original: '/images/gallery/01.jpg',
      thumbnail: '/images/gallery/01.jpg',
    },
    {
      original: '/images/gallery/02.jpg',
      thumbnail: '/images/gallery/02.jpg',
    },
    {
      original: '/images/gallery/03.jpg',
      thumbnail: '/images/gallery/03.jpg',
    },
    {
      original: '/images/gallery/04.jpg',
      thumbnail: '/images/gallery/04.jpg',
    },
    {
      original: '/images/gallery/05.jpg',
      thumbnail: '/images/gallery/05.jpg',
    },
    {
      original: '/images/gallery/06.jpg',
      thumbnail: '/images/gallery/06.jpg',
    },
    {
      original: '/images/gallery/07.jpg',
      thumbnail: '/images/gallery/07.jpg',
    },
    {
      original: '/images/gallery/08.jpg',
      thumbnail: '/images/gallery/08.jpg',
    },
    {
      original: '/images/gallery/09.jpg',
      thumbnail: '/images/gallery/09.jpg',
    },
    {
      original: '/images/gallery/10.jpg',
      thumbnail: '/images/gallery/10.jpg',
    },
    {
      original: '/images/gallery/11.jpg',
      thumbnail: '/images/gallery/11.jpg',
    },
  ];

  return (
    <div className={s.PhotoGallery}>
      <ImageGallery
        items={images}
        showPlayButton={true}
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