import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/../public/logo.png";

export default function UserInfo() {
  return (
    <aside className={styles.userInfo}>
      <Image src={logo} width={48} height={48} alt="User Icon" />
      <div className={styles.info}>
        <h4>Julio Cesar</h4>
        <p>juliofariadev@gmail.com</p>
      </div>
    </aside>
  );
}
