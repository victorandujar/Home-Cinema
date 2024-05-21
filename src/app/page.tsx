import { Test } from "@/components/Test";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Home page</h2>
        <Test />
      </div>
    </main>
  );
}
