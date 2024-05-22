"use client";

import styles from "./HomePage.module.scss";
import { fetchNowPlayingMovies } from "@/modules/movies/application/movies";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import repositories from "@/sections/shared/utils/repositories/repositories";
import HeroSection from "@/sections/shared/components/HeroSection/HeroSection";
import { mockImages } from "@/mocks/moviesMocks";

const Home = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await fetchNowPlayingMovies(repositories.movies, dispatch, 1, "en-US");
    })();
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <HeroSection images={mockImages} />
    </main>
  );
};

export default Home;
