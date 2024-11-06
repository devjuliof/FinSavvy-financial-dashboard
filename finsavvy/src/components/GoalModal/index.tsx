import { useState } from "react";
import styles from "./index.module.css";

interface GoalData {
  name: string;
  image: File | null;
  targetAmount: number;
}

interface GoalModalProps {
  onClose: () => void;
  onSave: (goalData: GoalData) => void;
}

export default function GoalModal({ onClose, onSave }: GoalModalProps) {
  const [goalData, setGoalData] = useState<GoalData>({
    name: "",
    image: null,
    targetAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      setGoalData((prev) => ({
        ...prev,
        image: files[0] || null,
      }));
    } else {
      setGoalData((prev) => ({
        ...prev,
        [name]: name === "targetAmount" ? parseFloat(value) : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(goalData);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} type="button" onClick={onClose}>
          x
        </button>
        <h2>Create Savings Goal</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Goal Name:
            <input
              type="text"
              name="name"
              value={goalData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Upload Image (optional):
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </label>

          <label>
            Target Amount:
            <input
              type="number"
              name="targetAmount"
              value={goalData.targetAmount}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.saveBtn}>
            Save Goal
          </button>
        </form>
      </div>
    </div>
  );
}
