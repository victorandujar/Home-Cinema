"use client";

import { ListCardList } from "@/sections/lists/components/ListCardList/ListCardList";
import { GoBackButton } from "@/sections/shared/components/GoBackButton/GoBackButton";
import styles from "./MyListsPage.module.scss";
import ReusableButton from "@/sections/shared/components/ReusableButton/ReusableButton";
import { FaPlus } from "react-icons/fa";
import ReusableModal from "@/sections/shared/components/ReusableModal/ReusableModal";
import { useState } from "react";
import ListCreateForm from "@/sections/lists/components/ListCreateForm/ListCreateForm";

const MyListsPage = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleModalOpen = () => {
    setOpenCreateModal(true);
  };

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
      <ListCardList />
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <ReusableModal
          openModal={openCreateModal}
          setIsModalOpen={setOpenCreateModal}
        >
          <ListCreateForm />
        </ReusableModal>
      </div>
    </main>
  );
};

export default MyListsPage;
