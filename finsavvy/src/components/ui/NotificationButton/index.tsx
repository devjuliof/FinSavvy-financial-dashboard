import Image from "next/image";
import bellIcon from "@/../public/bell_icon.png";
import styles from "./index.module.css";

export default function NotificationButton() {
  return (
    <button className={styles.button}>
      <Image src={bellIcon} alt="Bell Icon" width={28} height={28} />
    </button>
  );
}
