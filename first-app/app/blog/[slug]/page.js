import styles from '../page.module.css';

export default function BlogPostPage({ params }) {
    return (
        <div className={styles.page}>
            <h2>Blog post</h2>
            <p>{ params.slug }</p>
        </div>
    );
}