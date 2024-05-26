import { FullList, List } from "@/modules/lists/domain/List";
import React from "react";
import styles from "./ListCard.module.scss";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { deleteMovieListById } from "@/modules/lists/application/list";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";

interface Props {
  list: FullList;
}

export const ListCard = ({ list }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { listId } = useAppSelector((state) => state.lists);
  const { userSession } = useAppSelector((state) => state.user);

  const handleClick = async () => {
    const localStorageId = localStorage.getItem("listId");
    await deleteMovieListById(
      repositories.lists,
      dispatch,
      listId !== 0 ? listId.toString() : localStorageId!,
      userSession.session_id,
    );

    localStorage.removeItem("listId");
  };

  return (
    <article className={styles.container}>
      <Link href={`/list/${list.id}`} className={styles.link}>
        <section>
          <h4>{list.name}</h4>
          <span>{list.description}</span>
        </section>
      </Link>
      <section>
        <Tooltip title={"Delete list"}>
          <button
            className={styles.actionButton}
            aria-label="delete list"
            onClick={handleClick}
          >
            <FaTrash color="#fff" size={20} />
          </button>
        </Tooltip>
      </section>
    </article>
  );
};
