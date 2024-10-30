// contexts/FinanceDataContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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
  type: "expense" | "income" | "savings-increase" | "savings-decrease";
}

interface UserData {
  month: string;
  userAccountData: UserAccountData;
  userTransactions: UserTransaction[];
}

interface FinanceDataContextType {
  userData: UserData[];
  addTransaction: (transaction: UserTransaction, month: string) => void;
}

const FinanceDataContext = createContext<FinanceDataContextType | undefined>(
  undefined
);

function getCurrentMonth(): string {
  const date = new Date();
  return date.toLocaleString("en-US", { month: "short" }).toLowerCase();
}

export function FinanceDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData[]>(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      return JSON.parse(savedData);
    }

    const currentMonth = getCurrentMonth();
    return [
      {
        month: currentMonth,
        userAccountData: {
          totalBalance: 0,
          earnings: 0,
          spendings: 0,
          savings: 0,
        },
        userTransactions: [],
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const addTransaction = (transaction: UserTransaction, month: string) => {
    setUserData((prevUserData) =>
      prevUserData.map((data) => {
        if (data.month === month) {
          const updatedAccountData = { ...data.userAccountData };

          if (transaction.type === "income") {
            updatedAccountData.totalBalance += transaction.amount;
            updatedAccountData.earnings += transaction.amount;
          } else if (transaction.type === "expense") {
            updatedAccountData.totalBalance -= transaction.amount;
            updatedAccountData.spendings += transaction.amount;
          } else if (transaction.type === "savings-increase") {
            updatedAccountData.totalBalance -= transaction.amount;
            updatedAccountData.savings += transaction.amount;
          } else if (transaction.type === "savings-decrease") {
            updatedAccountData.totalBalance += transaction.amount;
            updatedAccountData.savings -= transaction.amount;
          }

          return {
            ...data,
            userAccountData: updatedAccountData,
            userTransactions: [...data.userTransactions, transaction],
          };
        }
        return data;
      })
    );
  };

  return (
    <FinanceDataContext.Provider value={{ userData, addTransaction }}>
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
