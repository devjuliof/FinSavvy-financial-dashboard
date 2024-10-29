import Image from "next/image";
import styles from "./index.module.css";
import cartIcon from "@/../public/shopping_cart.png";

interface TotalSpendingsCardProps {
  spendings: number;
}

export default function SpendingsCard({ spendings }: TotalSpendingsCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <Image src={cartIcon} alt="Piggy bank" width={28} height={28} />
        <h2>Spendings</h2>
      </header>
      <h3>${spendings}</h3>
    </article>
  );
}
