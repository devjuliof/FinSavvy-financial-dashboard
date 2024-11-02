import NotificationButton from "../ui/NotificationButton";
import UserInfo from "../ui/UserInfo";
import VerticalLine from "../ui/VerticalLine";
import styles from "./index.module.css";

interface HeaderProps {
  image: string;
  name: string;
  email: string;
}

export default function Header({ image, name, email }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2>Dashboard</h2>
      <div className={styles.rightContainer}>
        <NotificationButton />
        <VerticalLine />
        <UserInfo image={image} name={name} email={email} />
      </div>
    </header>
  );
}
