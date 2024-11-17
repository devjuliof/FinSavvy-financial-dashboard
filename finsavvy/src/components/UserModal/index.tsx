import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./index.module.css"; // Crie esse arquivo de estilo conforme necessário

type UserModal = {
  onClose: () => void;
};

export default function UserModal({ onClose }: UserModal) {
  const { data: session } = useSession(); // Obtendo a sessão do usuário

  // Função de logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // Redireciona o usuário após o logout
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>
            Are you sure you want to log out, {session?.user?.name || "User"}?
          </h3>
          <p>We hope to see you again soon!</p>
          <div className={styles.buttons}>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
            <button onClick={onClose} className={styles.closeBtn}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
