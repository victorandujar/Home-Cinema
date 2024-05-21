"use client";

import { Test } from "@/sections/shared/components/Test";
import styles from "./page.module.css";
import { fetchNowPlayingMovies } from "@/modules/movies/application/movies";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import repositories from "@/sections/shared/utils/repositories/repositories";

const Home = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await fetchNowPlayingMovies(repositories.movies, dispatch, 1, "en-US");
    })();
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <div>
        <h2>Home page</h2>
        <Test />
      </div>
    </main>
  );
};

export default Home;
