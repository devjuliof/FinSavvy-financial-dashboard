import { useState } from "react";
import styles from "./index.module.css";

interface UserTransaction {
  name: string;
  date: string;
  hour: string;
  amount: number;
  type: "expense" | "income" | "savings-increase" | "savings-decrease";
}

interface ModalFormProps {
  onClose: () => void;
}

export default function ModalForm({ onClose }: ModalFormProps) {
  const [formData, setFormData] = useState<UserTransaction>({
    name: "",
    date: "",
    hour: "",
    amount: 0,
    type: "expense",
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
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Add Transaction</h2>
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
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Hour:
            <input
              type="time"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Type:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
              <option value="savings-increase">Savings Increase</option>
              <option value="savings-decrease">Savings Decrease</option>
            </select>
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
