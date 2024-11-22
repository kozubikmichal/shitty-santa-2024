import styles from "./page.module.css";
import Reindeers from "@/components/Reindeers";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <Reindeers />
        </ol>
      </main>
    </div>
  );
}
