import Image from "next/image";
import styles from "./index.module.css";
import piggyBank from "@/../public/piggy_bank.png";

interface TotalSavingsCardProps {
  savings: number;
}

export default function SavingsCard({ savings }: TotalSavingsCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <Image src={piggyBank} alt="Piggy bank" width={28} height={28} />
        <h2>Savings</h2>
      </header>
      <h3>${savings}</h3>
    </article>
  );
}
