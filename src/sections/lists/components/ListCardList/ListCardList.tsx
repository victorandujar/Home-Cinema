import { mockLists } from "@/mocks/listsMocks";
import React from "react";
import { ListCard } from "../ListCard/ListCard";
import styles from "./ListCardList.module.scss";

export const ListCardList = () => {
  return (
    <ul className={styles.container}>
      {mockLists.map((list) => (
        <li key={list.name} className={styles.listItem}>
          <ListCard list={list} />
        </li>
      ))}
    </ul>
  );
};
