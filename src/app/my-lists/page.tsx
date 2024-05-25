import { ListCardList } from "@/sections/lists/components/ListCardList/ListCardList";
import { GoBackButton } from "@/sections/shared/components/GoBackButton/GoBackButton";
import styles from "./MyListsPage.module.scss";

const MyListsPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.goBackContainer}>
        <GoBackButton />
      </div>

      <ListCardList />
    </main>
  );
};

export default MyListsPage;
