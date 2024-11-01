import styles from "./index.module.css";
import Image from "next/image";
import expenseIcon from "@/../public/shopping_cart.png";
import earnIcon from "@/../public/earnings_icon.png";
import savingIcon from "@/../public/piggy_bank.png";

interface ActivityCardProps {
  iconType: "income" | "expense" | "saving";
  name: string;
  date: string;
  hour: string;
  amount: number;
}
export default function ActivityCard({
  iconType,
  name,
  date,
  hour,
  amount,
}: ActivityCardProps) {
  return (
    <div className={styles.notification}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {iconType === "income" && <Image alt="Earn Icon" src={earnIcon} />}
        {iconType === "expense" && (
          <Image alt="Expense Icon" src={expenseIcon} />
        )}
        {iconType === "saving" && <Image alt="Saving Icon" src={savingIcon} />}
        <div>
          <h3>{name}</h3>
          <p>
            {date} at {hour}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: iconType === "expense" ? "red" : "green" }}>
          {iconType === "expense" ? "-" : "+"} ${Math.abs(amount)}
        </h2>
      </div>
    </div>
  );
}
