"use client";

import Image from "next/image";
import googleIcon from "@/../public/google_icon.png";
import styles from "./index.module.css";

import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <button onClick={handleSignIn} className={styles.button}>
      <Image src={googleIcon} width={24} height={24} alt="Google Icon" />
      Google
    </button>
  );
}
