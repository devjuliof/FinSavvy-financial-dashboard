import { useState } from "react";
import Image from "next/image";
import dollarSign from "@/../public/dollar_sign.png";
import styles from "./index.module.css";
import AddButton from "../ui/AddButton";
import SendButton from "../ui/SendButton";
import ModalForm from "../ModalForm";

interface TotalBalanceCardProps {
  balance: number;
}

export default function TotalBalanceCard({ balance }: TotalBalanceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article className={styles.card}>
      <header>
        <Image src={dollarSign} alt="Dollar sign" width={28} height={28} />
        <h2>Total Balance</h2>
      </header>
      <h3>${balance}</h3>
      <div className={styles.buttons}>
        <AddButton onClick={openModal} />
        <SendButton />
      </div>

      {isModalOpen && <ModalForm onClose={closeModal} />}
    </article>
  );
}
