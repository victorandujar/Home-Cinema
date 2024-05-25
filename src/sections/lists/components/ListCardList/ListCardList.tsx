import React from "react";
import { ListCard } from "../ListCard/ListCard";
import styles from "./ListCardList.module.scss";
import { useAppSelector } from "@/store/hooks";

export const ListCardList = () => {
  const { lists } = useAppSelector((state) => state.lists);

  return (
    <ul className={styles.container}>
      {lists?.map((list) => (
        <li key={list.name} className={styles.listItem}>
          <ListCard list={list} />
        </li>
      ))}
    </ul>
  );
};
