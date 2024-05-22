"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import { MovieImage } from "@/modules/movies/domain/Movies";
import styles from "./HeroSection.module.scss";
import Header from "../Header/Header";

interface Props {
  images: MovieImage[];
}

export default function HeroSection({ images }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    const imageChangeTimer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearTimeout(imageChangeTimer);
  }, [currentImageIndex, images]);

  const summPage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);

      return;
    }
    setCurrentImageIndex(currentImageIndex + 1);
    return;
  };

  const lessPage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
      return;
    }

    setCurrentImageIndex(currentImageIndex - 1);
    return;
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.title}>
        <Header />
      </div>
      <Link className={styles.image__slider} href={""}>
        {images && images.length > 0 && (
          <ImageCustom
            width={300}
            height={300}
            className={styles.image}
            image={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
        )}
      </Link>
      <div className={styles.carrouselButtonsSelector}>
        {images.map((image: MovieImage, index: number) => (
          <button
            key={Math.random() * 10}
            className={`${styles.defaultCarrouselButton} ${
              index === currentImageIndex ? styles.selectedButton : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>

      <button className={styles.paginationButton__left} onClick={lessPage}>
        {"<"}
      </button>
      <button className={styles.paginationButton__right} onClick={summPage}>
        {">"}
      </button>
    </section>
  );
}
