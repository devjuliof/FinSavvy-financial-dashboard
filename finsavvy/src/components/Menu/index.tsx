import Image from "next/image";
import LogoAndText from "../ui/LogoAndText";
import styles from "./index.module.css";
import overviewIcon from "@/../public/overview.png";
import wallet from "@/../public/wallet.png";

type MenuProps = {
  currentPage: "overview" | "mySavings";
  setCurrentPage: (page: "overview" | "mySavings") => void;
};
export default function Menu({ currentPage, setCurrentPage }: MenuProps) {
  return (
    <aside className={styles.menu}>
      <article className={styles.container}>
        <LogoAndText />
        <div className={styles.content}>
          <h2>Menu</h2>
          <nav className={styles.nav}>
            <button
              className={currentPage === "overview" ? styles.active : ""}
              onClick={() => setCurrentPage("overview")}
            >
              <Image
                src={overviewIcon}
                alt="Overview Icon"
                width={20}
                height={20}
              />
              Overview
            </button>
            <button
              className={currentPage === "mySavings" ? styles.active : ""}
              onClick={() => setCurrentPage("mySavings")}
            >
              <Image src={wallet} alt="Wallet icon" width={20} height={20} />
              My Savings
            </button>
          </nav>
        </div>
      </article>
    </aside>
  );
}
