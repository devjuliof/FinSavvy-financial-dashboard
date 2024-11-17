import Image from "next/image";
import styles from "./index.module.css";
import React from "react";
import UserModal from "../../UserModal";

interface HeaderProps {
  image: string;
  name: string;
  email: string;
}

export default function UserInfo({ image, name, email }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Função para abrir o modal
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <aside className={styles.userInfo} onClick={handleClick}>
        {image && <Image src={image} width={48} height={48} alt="User Icon" />}

        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </aside>

      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
