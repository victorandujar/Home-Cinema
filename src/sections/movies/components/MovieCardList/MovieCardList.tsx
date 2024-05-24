import { useAppSelector } from "@/store/hooks";
import React from "react";
import styles from "./MovieCardList.module.scss";
import MovieCard from "../MovieCard/MovieCard";

export const MovieCardList = () => {
  const { movies } = useAppSelector((state) => state.movies);
  return (
    <ul className={styles.container}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
