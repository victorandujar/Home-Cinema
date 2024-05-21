import { Test } from "@/sections/shared/components/Test";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Home page</h2>
        <Test />
      </div>
    </main>
  );
}
