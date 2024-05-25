import { List } from "@/modules/lists/domain/List";
import React from "react";
import styles from "./ListCard.module.scss";
import { FaEye, FaTrash } from "react-icons/fa";
import { Tooltip } from "@mui/material";

interface Props {
  list: List;
}

export const ListCard = ({ list }: Props): React.ReactElement => {
  return (
    <article className={styles.container}>
      <section>
        <h4>{list.name}</h4>
        <span>{list.description}</span>
      </section>
      <section>
        <Tooltip title={"See details"}>
          <button className={styles.actionButton} aria-label="see details">
            <FaEye color="#9C27B0" size={20} />
          </button>
        </Tooltip>
        <Tooltip title={"Delete list"}>
          <button className={styles.actionButton} aria-label="delete list">
            <FaTrash color="#fff" size={20} />
          </button>
        </Tooltip>
      </section>
    </article>
  );
};
