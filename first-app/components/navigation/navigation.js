import Link from "next/link";

export default function Nav() {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
    </nav>  
  );
}