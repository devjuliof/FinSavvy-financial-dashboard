import EarningsCard from "../EarningsCard";
import SavingsCard from "../SavingsCard";
import SpendingsCard from "../SpendingsCard";
import TotalBalanceCard from "../TotalBalanceCard";
import styles from "./index.module.css";
import { useFinanceData } from "../../contexts/FinanceDataContext";

export default function Overview() {
  const { userData } = useFinanceData();
  const { totalBalance, earnings, spendings, savings } =
    userData[0].userAccountData;

  return (
    <section className={styles.section}>
      <h1>Overview</h1>
      <div className={styles.cards}>
        <TotalBalanceCard balance={totalBalance} />
        <EarningsCard earnings={earnings} />
        <SpendingsCard spendings={spendings} />
        <SavingsCard savings={savings} />
      </div>
    </section>
  );
}
