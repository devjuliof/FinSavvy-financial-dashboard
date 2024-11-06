import styles from "./index.module.css";

interface AddButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TakeoutButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      Take Out
    </button>
  );
}
