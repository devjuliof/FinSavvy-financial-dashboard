import styles from "./index.module.css";
import Image from "next/image";
import overviewIcon from "@/../public/overview.png";
import wallet from "@/../public/wallet.png";

type MenuProps = {
  currentPage: "overview" | "mySavings";
  setCurrentPage: (page: "overview" | "mySavings") => void;
};

export default function MenuMobile({ currentPage, setCurrentPage }: MenuProps) {
  return (
    <aside className={styles.menu}>
      <nav className={styles.nav}>
        <button
          className={`${styles.button} ${
            currentPage === "overview" ? styles.active : ""
          }`}
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
          className={`${styles.button} ${
            currentPage === "mySavings" ? styles.active : ""
          }`}
          onClick={() => setCurrentPage("mySavings")}
        >
          <Image src={wallet} alt="Wallet icon" width={20} height={20} />
          My Savings
        </button>
      </nav>
    </aside>
  );
}
