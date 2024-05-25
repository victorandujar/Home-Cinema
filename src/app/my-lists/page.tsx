"use client";

import { ListCardList } from "@/sections/lists/components/ListCardList/ListCardList";
import { GoBackButton } from "@/sections/shared/components/GoBackButton/GoBackButton";
import styles from "./MyListsPage.module.scss";
import ReusableButton from "@/sections/shared/components/ReusableButton/ReusableButton";
import { FaPlus } from "react-icons/fa";
import ReusableModal from "@/sections/shared/components/ReusableModal/ReusableModal";
import { useEffect, useState } from "react";
import ListCreateForm from "@/sections/lists/components/ListCreateForm/ListCreateForm";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getMovieListById } from "@/modules/lists/application/list";
import repositories from "@/sections/shared/utils/repositories/repositories";
import Loader from "@/sections/shared/components/Loader/Loader";

const MyListsPage = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleModalOpen = () => {
    setOpenCreateModal(true);
  };

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.lists);

  const { listId } = useAppSelector((state) => state.lists);

  useEffect(() => {
    (async () => {
      const localStorageId = localStorage.getItem("listId");
      (listId !== 0 || localStorageId) &&
        (await getMovieListById(
          repositories.lists,
          dispatch,
          listId !== 0 ? listId.toString() : localStorageId!,
        ));
    })();
  }, [dispatch, listId]);

  return (
    <main className={styles.container}>
      <div className={styles.goBackContainer}>
        <GoBackButton />
        <ReusableButton
          text="New list"
          icon={<FaPlus />}
          onClick={handleModalOpen}
        />
      </div>
      {loading ? <Loader /> : <ListCardList />}
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <ReusableModal
          openModal={openCreateModal}
          setIsModalOpen={setOpenCreateModal}
        >
          <ListCreateForm setOpenModal={setOpenCreateModal} />
        </ReusableModal>
      </div>
    </main>
  );
};

export default MyListsPage;
