import Image from "next/image";
import styles from "./index.module.css";
import earningsIcon from "@/../public/earnings_icon.png";

interface TotalEarningsCardProps {
  earnings: number;
}

export default function EarningsCard({ earnings }: TotalEarningsCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <Image src={earningsIcon} alt="Earnings Icon" width={28} height={28} />
        <h2>Earnings</h2>
      </header>
      <h3>${earnings}</h3>
    </article>
  );
}
