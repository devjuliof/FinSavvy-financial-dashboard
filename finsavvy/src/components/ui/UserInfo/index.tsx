import Image from "next/image";
import styles from "./index.module.css";

interface HeaderProps {
  image: string;
  name: string;
  email: string;
}

export default function UserInfo({ image, name, email }: HeaderProps) {
  return (
    <aside className={styles.userInfo}>
      {image && <Image src={image} width={48} height={48} alt="User Icon" />}

      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </aside>
  );
}
