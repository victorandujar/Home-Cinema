import { CircularProgress } from "@mui/material";
import React from "react";
import styles from "./Loader.module.scss";

const Loader = (): React.ReactElement => {
  return (
    <section className={styles.container}>
      <CircularProgress color="secondary" aria-label="loading" />
    </section>
  );
};

export default Loader;
