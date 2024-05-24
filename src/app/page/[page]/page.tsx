"use client";

import styles from "./HomePage.module.scss";
import { fetchNowPlayingMovies } from "@/modules/movies/application/movies";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import repositories from "@/sections/shared/utils/repositories/repositories";
import HeroSection from "@/sections/shared/components/HeroSection/HeroSection";
import { mockImages } from "@/mocks/moviesMocks";
import { MovieCardList } from "@/sections/movies/components/MovieCardList/MovieCardList";
import CustomPagination from "@/sections/shared/components/CustomPagination/CustomPagination";

interface Props {
  params: {
    page: number;
  };
}

const Home = ({ params: { page } }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await fetchNowPlayingMovies(repositories.movies, dispatch, page, "en-US");
    })();
  }, [dispatch, page]);

  return (
    <main className={styles.main}>
      <HeroSection images={mockImages} />
      <div className={styles.moviesContainer}>
        <MovieCardList />
        <div className={styles.paginationContainer}>
          <CustomPagination currentPage={page} pageName="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
