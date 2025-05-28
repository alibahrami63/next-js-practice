import style from './header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <h1>Welcome to My First Next.js App</h1>
            <p>Welcome to my portfolio!</p>
        </header>
    )
}