"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./GoBackButton.module.scss";

export const GoBackButton = () => {
  const router = useRouter();

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.back();
  };

  return (
    <button onClick={handleBackClick} className={styles.container}>
      <IoIosArrowBack />
      <span>Back</span>
    </button>
  );
};
