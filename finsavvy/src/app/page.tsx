import FacebookButton from "@/components/ui/FacebookButton";
import GoogleButton from "@/components/ui/GoogleButton";
import LogoAndText from "@/components/ui/LogoAndText";
import flyer from "@/../public/flyer.png";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <div className={styles.container}>
          <LogoAndText />
          <div className={styles.text}>
            <h1>Log in to your account</h1>
            <p>Welcome! Select method to log in: </p>
          </div>
          <div className={styles.buttons}>
            <FacebookButton />
            <GoogleButton />
          </div>
        </div>
      </main>
      <article className={styles.article}>
        <Image src={flyer} alt="flyer" layout="fill" objectFit="contain" />
      </article>
    </section>
  );
}
