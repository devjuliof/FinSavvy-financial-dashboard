import Image from "next/image";
import arrowIcon from "@/../public/uparrow_icon.png";
import styles from "./index.module.css";

interface AddButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SendButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <Image src={arrowIcon} alt="Plus Icon" width={16} height={16} /> Send
    </button>
  );
}
