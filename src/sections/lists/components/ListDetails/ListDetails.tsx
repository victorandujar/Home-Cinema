"use client";

import { useAppSelector } from "@/store/hooks";
import styles from "./ListDetail.module.scss";
import { MovieCardList } from "@/sections/movies/components/MovieCardList/MovieCardList";

export const ListDetails = () => {
  const { list } = useAppSelector((state) => state.lists);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.listInfo}>
          <h3 className={styles.listTitle}>{list.name}</h3>
          <span>{list.description}</span>
        </div>
        <div className={styles.counts}>
          <span>{list.item_count} movies</span>
          <span>{list.favorite_count} times added to favourites</span>
        </div>
      </div>
      <div className={styles.moviesList}>
        <MovieCardList movies={list.items} />
      </div>
    </section>
  );
};
