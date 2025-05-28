import styles from "./page.module.css";

export default function Home() {
  return (
    console.log("Executing hopme page..."),
    <div className={styles.page}>
      <h2>Welcome to My Portfolio</h2>
      This is the body of the home page.
    </div>
  );
}
