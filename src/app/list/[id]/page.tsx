"use client";

import { getMovieListById } from "@/modules/lists/application/list";
import { ListDetails } from "@/sections/lists/components/ListDetails/ListDetails";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch } from "@/store/hooks";
import React, { useEffect } from "react";
import styles from "./ListByIdDetailsPage.module.scss";
import { GoBackButton } from "@/sections/shared/components/GoBackButton/GoBackButton";

interface Props {
  params: { id: string };
}

export const ListByIdDetailsPage = ({
  params: { id },
}: Props): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await getMovieListById(repositories.lists, dispatch, id);
    })();
  }, [dispatch, id]);

  return (
    <main className={styles.container}>
      <div className={styles.backButton}>
        <GoBackButton />
      </div>
      <ListDetails />
    </main>
  );
};

export default ListByIdDetailsPage;
