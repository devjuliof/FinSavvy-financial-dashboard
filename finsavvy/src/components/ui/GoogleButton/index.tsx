import Image from "next/image";
import googleIcon from "@/../public/google_icon.png";
import styles from "./index.module.css";
import { signIn } from "@/auth";

export default function GoogleButton() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
      className={styles.button}
    >
      <Image src={googleIcon} width={24} height={24} alt="Google Icon" />
      Google
    </button>
  );
}
