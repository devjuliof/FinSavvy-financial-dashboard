import { useEffect, useState } from "react";
import EarningsCard from "../EarningsCard";
import SavingsCard from "../SavingsCard";
import SpendingsCard from "../SpendingsCard";
import TotalBalanceCard from "../TotalBalanceCard";
import styles from "./index.module.css";
import EarningsExpensesChart from "../EarningsExpensesChart";

interface UserAccountData {
  totalBalance: number;
  earnings: number;
  spendings: number;
  savings: number;
}

interface UserData {
  month: string;
  userAccountData: UserAccountData;
}

export default function Overview() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [userAccountData, setUserAccountData] =
    useState<UserAccountData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/mock.json");
      const data = await response.json();
      setUserData(data.userData);
      setUserAccountData(data.userData[0].userAccountData);
    };

    fetchData();
  }, []);

  if (!userAccountData) {
    return <div>Loading...</div>;
  }

  const { totalBalance, earnings, spendings, savings } = userAccountData;

  return (
    <section className={styles.section}>
      <h1>Overview</h1>
      <div className={styles.cards}>
        <TotalBalanceCard balance={totalBalance} />
        <EarningsCard earnings={earnings} />
        <SpendingsCard spendings={spendings} />
        <SavingsCard savings={savings} />
      </div>
      <div className={styles.chart}>
        <EarningsExpensesChart userData={userData} />
      </div>
    </section>
  );
}
