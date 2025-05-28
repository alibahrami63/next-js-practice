import styles from "../page.module.css";

export default function FirstRoute() {
  return (
    <main className={styles.page}>
      <h2>About page</h2>
      <p>This is the about page of our Next.js application.</p>
    </main>
  );
}