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
import { useAppSelector } from "../../../store/hooks";
import Loader from "@/sections/shared/components/Loader/Loader";
import NoDataHandler from "@/sections/shared/components/NoDataHandler/NoDataHandler";

interface Props {
  params: {
    page: number;
  };
}

const Home = ({ params: { page } }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { loading, movies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    (async () => {
      await fetchNowPlayingMovies(repositories.movies, dispatch, page, "en-US");
    })();
  }, [dispatch, page]);

  return (
    <main className={styles.main}>
      <HeroSection images={mockImages} />
      {loading ? (
        <Loader />
      ) : !loading && movies ? (
        <div className={styles.moviesContainer}>
          <MovieCardList />
          <div className={styles.paginationContainer}>
            <CustomPagination currentPage={page} pageName="" />
          </div>
        </div>
      ) : (
        !movies && (
          <NoDataHandler text="No hay sesiones disponibles por ahora. Sentimos las moléstias." />
        )
      )}
    </main>
  );
};

export default Home;
