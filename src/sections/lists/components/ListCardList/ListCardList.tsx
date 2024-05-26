import React from "react";
import { ListCard } from "../ListCard/ListCard";
import styles from "./ListCardList.module.scss";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export const ListCardList = () => {
  const { lists } = useAppSelector((state) => state.lists);

  return (
    <ul className={styles.container}>
      {lists?.map((list) => (
        <li key={list.name + Math.random()} className={styles.listItem}>
          <ListCard list={list} />
        </li>
      ))}
    </ul>
  );
};
