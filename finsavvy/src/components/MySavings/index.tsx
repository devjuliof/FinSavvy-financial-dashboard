"use client";

import React from "react";
import SavingCard from "../SavingCard";
import styles from "./index.module.css";
import GoalModal from "../GoalModal";

interface SavingGoal {
  name: string;
  image: File | null;
  targetAmount: number;
  currentAmount?: number;
}

export default function MySavings() {
  const [savingCards, setSavingCards] = React.useState<SavingGoal[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveGoal = (goalData: SavingGoal) => {
    setSavingCards((prevCards) => [...prevCards, goalData]);
    closeModal();
  };

  const handleDeleteGoal = (index: number) => {
    setSavingCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.tittle}>MySavings</h1>
        <div className={styles.row}>
          <div className={styles.cards}>
            {savingCards.map((goal, index) => (
              <SavingCard
                key={index}
                name={goal.name}
                image={goal.image}
                targetAmount={goal.targetAmount}
                currentAmount={goal.currentAmount}
                onDelete={() => handleDeleteGoal(index)}
              />
            ))}
            <button className={styles.addBtn} onClick={openModal}>
              +
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <GoalModal onClose={closeModal} onSave={handleSaveGoal} />
      )}
    </>
  );
}
