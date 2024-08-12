import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LoginButton from "../../Login_compo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/addproject">Add Product</Link><br></br>
      <Link href="/projects">All Projects</Link>
      <LoginButton />
    </main>
  );
}
