import Link from "next/link";

import styles from "./page.module.css";
import Header from "@/components/header"; // @ refers to the root of the project, so it will look for components in the components folder

export default function Home() {
  return (
    console.log("Executing hopme page..."),
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <Link href="/about" className="">About us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <main className={styles.main}>
        <Header />
      </main>
      <footer className={styles.footer}>
        <p>Footer section</p>
      </footer>
    </div>
  );
}
