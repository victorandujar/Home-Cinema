import React from "react";
import styles from "./NoDataHandler.module.scss";

interface Props {
  text: string;
}

const NoDataHandler = ({ text }: Props): React.ReactElement => {
  return (
    <section className={styles.container}>
      <span className={styles.text}>{text}</span>
    </section>
  );
};

export default NoDataHandler;
