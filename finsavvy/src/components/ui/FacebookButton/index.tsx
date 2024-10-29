import Image from "next/image";
import facebookIcon from "@/../public/facebook_icon.png";
import styles from "./index.module.css";

export default function FacebookButton() {
  return (
    <button className={styles.button}>
      <Image src={facebookIcon} width={24} height={24} alt="Facebook Icon" />
      Facebook
    </button>
  );
}
