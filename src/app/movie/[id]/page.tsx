"use client";

import { fetchMovieById } from "@/modules/movies/application/movies";
import MovieDetail from "@/sections/movies/components/MovieDetail/MovieDetail";
import { GoBackButton } from "@/sections/shared/components/GoBackButton/GoBackButton";
import Loader from "@/sections/shared/components/Loader/Loader";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";
import styles from "./MovieByIgPage.module.scss";

interface Props {
  params: { id: string };
}

const MovieDetailPage = ({ params: { id } }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    (async () => {
      await fetchMovieById(repositories.movies, dispatch, +id);
    })();
  }, [dispatch, id]);

  return (
    <main className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.dataContainer}>
          <GoBackButton />
          <MovieDetail />
        </div>
      )}
    </main>
  );
};

export default MovieDetailPage;
