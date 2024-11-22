import createDbClient from "@/utils/createDbClient";
import styles from "../../page.module.css";
import Reindeers from "@/components/Reindeers";
import { getRecipientName, getUserName } from "@/utils/db";

export default async function SantaPage({ params }) {
  const { id } = await params;

  const dbClient = createDbClient();

  const fromName = await getUserName(dbClient, id);
  const toName = await getRecipientName(dbClient, id);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <div className={styles.santaContent}>
            <Reindeers size={64} />
            {fromName && toName && (
              <>
                <h3>Congratulations {fromName}!</h3>
                <h3>This year you will be giving a gift to:</h3>
                <h1>{toName}</h1>
              </>
            )}
            <Reindeers size={64} />
          </div>
        </ol>
      </main>
    </div>
  );
}
