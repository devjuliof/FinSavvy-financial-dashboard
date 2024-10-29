import Image from "next/image";
import googleIcon from "@/../public/google_icon.png";
import styles from "./index.module.css";

export default function GoogleButton() {
  return (
    <button className={styles.button}>
      <Image src={googleIcon} width={24} height={24} alt="Google Icon" />
      Google
    </button>
  );
}
