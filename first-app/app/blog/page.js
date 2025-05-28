import Link from "next/link";

import styles from "../page.module.css";

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <h2>The blog</h2>
            <p><Link href="/blog/post-1">Post 1</Link></p>
            <p><Link href="/blog/post-2">Post 2</Link></p>
        </div>
    );
}