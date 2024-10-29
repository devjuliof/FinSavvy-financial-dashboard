import Image from "next/image";
import plusIcon from "@/../public/plus_icon.png";
import styles from "./index.module.css";

export default function AddButton() {
  return (
    <button className={styles.button}>
      <Image src={plusIcon} alt="Plus Icon" width={16} height={16} /> Add
    </button>
  );
}
