import Image from "next/image";
import styles from "./index.module.css";
import AddButton from "../ui/AddButton";
import trashIcon from "@/../public/trash_icon.png";
import ProgressBar from "../ui/ProgressBar";
import TakeoutButton from "../ui/TakeoutButton";
import { useState } from "react";
import ModalForm from "../ModalForm";

interface SavingCardProps {
  name: string;
  image: File | null;
  targetAmount: number;
  currentAmount?: number;
  onDelete: () => void;
}

export default function SavingCard({
  name,
  image,
  targetAmount,
  currentAmount,
  onDelete,
}: SavingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<
    "savings-increase" | "savings-decrease"
  >("savings-increase");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article className={styles.container}>
        <header>
          {/* Botão de exclusão */}
          <button onClick={onDelete}>
            <Image src={trashIcon} alt="TrashIcon" width={32} height={32} />
          </button>
        </header>
        <div className={styles.divImage}>
          {/* Exibindo a imagem ou um placeholder */}
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              alt={name}
              width={200}
              height={200}
            />
          ) : (
            <div>No Image</div>
          )}
        </div>
        <div className={styles.nameAndPrice}>
          <h2>{name}</h2>
          <p>
            ${currentAmount || 0}/{targetAmount}
          </p>
        </div>
        <div className={styles.progressBar}>
          <ProgressBar currentAmount={currentAmount} goal={targetAmount} />
        </div>
        <div className={styles.buttons}>
          <AddButton
            onClick={() => {
              openModal();
              setTransactionType("savings-increase");
            }}
          />
          <TakeoutButton
            onClick={() => {
              openModal();
              setTransactionType("savings-decrease");
            }}
          />
        </div>
      </article>
      {isModalOpen && (
        <ModalForm onClose={closeModal} transactionType={transactionType} />
      )}
    </>
  );
}
