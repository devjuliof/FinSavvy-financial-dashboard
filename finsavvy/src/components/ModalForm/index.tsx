"use client";

import { useState } from "react";
import styles from "./index.module.css";
import SaveButton from "../ui/SaveButton";
import AddButton from "../ui/AddButton";
import SendButton from "../ui/SendButton";
import TakeoutButton from "../ui/TakeoutButton";

interface UserTransaction {
  name: string;
  date: string;
  hour: string;
  amount: number;
  type: "expense" | "income" | "savings-increase" | "savings-decrease";
}

interface ModalFormProps {
  onClose: () => void;
  transactionType:
    | "expense"
    | "income"
    | "savings-increase"
    | "savings-decrease";
}

export default function ModalForm({
  onClose,
  transactionType,
}: ModalFormProps) {
  const [formData, setFormData] = useState<UserTransaction>({
    name: "",
    date: "",
    hour: "",
    amount: 0,
    type: transactionType,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Send data to Backend
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} type="button" onClick={onClose}>
          x
        </button>
        {transactionType === "income" && <h2>Add Transaction</h2>}
        {transactionType === "expense" && <h2>Send Money</h2>}
        {transactionType === "savings-increase" && <h2>Save Money</h2>}
        {transactionType === "savings-decrease" && <h2>Take from Savings</h2>}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <div className={styles.wrap}>
            <label className={styles.column}>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.column}>
              Hour:
              <input
                type="time"
                name="hour"
                value={formData.hour}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.wrap}>
            <label className={styles.column}>
              Amount:
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.submitBtn}>
            {transactionType === "income" && (
              <AddButton onClick={(e) => handleSubmit(e)} />
            )}
            {transactionType === "expense" && (
              <SendButton onClick={(e) => handleSubmit(e)} />
            )}
            {transactionType === "savings-decrease" && (
              <TakeoutButton onClick={(e) => handleSubmit(e)} />
            )}
            {transactionType === "savings-increase" && (
              <AddButton onClick={(e) => handleSubmit(e)} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
