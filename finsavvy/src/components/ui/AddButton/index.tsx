import Image from "next/image";
import plusIcon from "@/../public/plus_icon.png";
import styles from "./index.module.css";

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <Image src={plusIcon} alt="Plus Icon" width={16} height={16} /> Add
    </button>
  );
}
