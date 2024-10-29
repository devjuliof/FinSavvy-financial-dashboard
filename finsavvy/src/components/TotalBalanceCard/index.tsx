import Image from "next/image";
import dollarSign from "@/../public/dollar_sign.png";
import styles from "./index.module.css";
import AddButton from "../ui/AddButton";
import SendButton from "../ui/SendButton";

interface TotalBalanceCardProps {
  balance: number;
}

export default function TotalBalanceCard({ balance }: TotalBalanceCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <Image src={dollarSign} alt="Dollar sign" width={28} height={28} />
        <h2>Total Balance</h2>
      </header>
      <h3>${balance}</h3>
      <div className={styles.buttons}>
        <AddButton />
        <SendButton />
      </div>
    </article>
  );
}
