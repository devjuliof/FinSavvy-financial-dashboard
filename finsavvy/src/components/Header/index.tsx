import NotificationButton from "../ui/NotificationButton";
import UserInfo from "../ui/UserInfo";
import VerticalLine from "../ui/VerticalLine";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Dashboard</h2>
      <div className={styles.rightContainer}>
        <NotificationButton />
        <VerticalLine />
        <UserInfo />
      </div>
    </header>
  );
}
