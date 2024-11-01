"use client";

import React from "react";
import ActivityCard from "../ActivityCard";
import styles from "./index.module.css";

// Define a interface para representar a estrutura de uma transação
interface Transaction {
  type: "income" | "expense" | "saving"; // Tipo de transação, por exemplo: "income", "expense", etc.
  name: string; // Nome da transação
  date: string; // Data da transação
  hour: string; // Hora da transação
  amount: number; // Quantidade da transação
}

export default function RecentActivity() {
  // Define o estado com o tipo Transaction[] (array de transações) ou null
  const [userTransactions, setUserTransactions] = React.useState<
    Transaction[] | null
  >(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/mock.json");
      const data = await response.json();
      console.log(data);
      setUserTransactions(data.userData[9].userTransactions); // Alterar índice conforme necessário
    };
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <header>
        <h2>Recent Activity</h2>
      </header>
      {userTransactions?.map((transaction, index) => (
        <ActivityCard
          key={index}
          iconType={transaction.type}
          name={transaction.name}
          date={transaction.date}
          hour={transaction.hour}
          amount={transaction.amount}
        />
      ))}
    </main>
  );
}
