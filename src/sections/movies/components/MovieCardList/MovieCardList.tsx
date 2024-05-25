"use client";

import { useAppSelector } from "@/store/hooks";
import React from "react";
import styles from "./MovieCardList.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import Link from "next/link";

export const MovieCardList = () => {
  const { movies } = useAppSelector((state) => state.movies);
  return (
    <ul className={styles.container}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`} className={styles.linkCard}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
