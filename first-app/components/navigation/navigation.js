import Link from "next/link";

import styles from "./navigation";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
        <Link href="/" className="">Home</Link>
        <Link href="/about" className="">About us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
    </nav>  
  );
}