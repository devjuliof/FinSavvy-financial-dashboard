import { createContext, useContext, useState, ReactNode } from "react";

interface UserAccountData {
  totalBalance: number;
  earnings: number;
  spendings: number;
  savings: number;
}

interface UserTransaction {
  name: string;
  date: string;
  hour: string;
  amount: number;
  type: "expense" | "income";
}

interface UserData {
  month: string;
  userAccountData: UserAccountData;
  userTransactions: UserTransaction[];
}

interface FinanceDataContextType {
  userData: UserData[];
}

const FinanceDataContext = createContext<FinanceDataContextType | undefined>(
  undefined
);

export function FinanceDataProvider({ children }: { children: ReactNode }) {
  // Simulated data
  const [userData] = useState<UserData[]>([
    {
      month: "jan",
      userAccountData: {
        totalBalance: 2330.92,
        earnings: 1824.32,
        spendings: 1590.19,
        savings: 504.02,
      },
      userTransactions: [
        {
          name: "Mercado",
          date: "5 Jan 2024",
          hour: "14:30",
          amount: 50.0,
          type: "expense",
        },
        {
          name: "Salário",
          date: "1 Jan 2024",
          hour: "09:00",
          amount: 2000.0,
          type: "income",
        },
      ],
    },
  ]);

  return (
    <FinanceDataContext.Provider value={{ userData }}>
      {children}
    </FinanceDataContext.Provider>
  );
}

export function useFinanceData() {
  const context = useContext(FinanceDataContext);
  if (!context) {
    throw new Error("useFinanceData must be used within a FinanceDataProvider");
  }
  return context;
}
