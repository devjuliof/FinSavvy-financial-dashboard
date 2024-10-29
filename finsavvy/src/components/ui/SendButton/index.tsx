import Image from "next/image";
import arrowIcon from "@/../public/uparrow_icon.png";
import styles from "./index.module.css";

export default function SendButton() {
  return (
    <button className={styles.button}>
      <Image src={arrowIcon} alt="Plus Icon" width={16} height={16} /> Send
    </button>
  );
}
