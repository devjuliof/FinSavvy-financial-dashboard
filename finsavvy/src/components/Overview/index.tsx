import EarningsCard from "../EarningsCard";
import SavingsCard from "../SavingsCard";
import SpendingsCard from "../SpendingsCard";
import TotalBalanceCard from "../TotalBalanceCard";
import styles from "./index.module.css";
import { useFinanceData } from "../../contexts/FinanceDataContext";

export default function Overview() {
  const { userData, addTransaction } = useFinanceData();
  const { totalBalance, earnings, spendings, savings } =
    userData[0].userAccountData;

  console.log(userData[0]);

  const handleAddTransaction = () => {
    const newTransaction = {
      name: "Saldo atual",
      date: "25 Oct 2024",
      hour: "16:00",
      amount: 200,
      type: "income" as const,
    };
    addTransaction(newTransaction, "oct"); // Supondo que o mês é 'jan'
  };

  console.log(userData[0]);

  return (
    <section className={styles.section}>
      <h1 onClick={() => handleAddTransaction()}>Overview</h1>
      <div className={styles.cards}>
        <TotalBalanceCard balance={totalBalance} />
        <EarningsCard earnings={earnings} />
        <SpendingsCard spendings={spendings} />
        <SavingsCard savings={savings} />
      </div>
    </section>
  );
}
