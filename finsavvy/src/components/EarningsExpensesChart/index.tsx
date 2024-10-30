import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface UserAccountData {
  month: string;
  userAccountData: {
    earnings: number;
    spendings: number;
  };
}

interface MonthlyChartProps {
  userData: UserAccountData[];
}

const MonthlyChart: React.FC<MonthlyChartProps> = ({ userData }) => {
  const labels = userData.map((data) => data.month);
  const earnings = userData.map((data) => data.userAccountData.earnings);
  const spendings = userData.map((data) => data.userAccountData.spendings);

  const data = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data: earnings,
        backgroundColor: "#0e3145",
        borderColor: "#0e3145",
        borderWidth: 1,
        borderRadius: 5,
      },
      {
        label: "Spendings",
        data: spendings,
        backgroundColor: "#3cd7c7",
        borderColor: "#3cd7c7",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            family: "var(--font-inter)",
            color: "#333",
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
            family: "var(--font-inter)",
            color: "#555",
          },
        },
        grid: {
          color: "#cccccc",
          lineWidth: 1,
          borderDash: [5, 5],
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        barPercentage: 0.8,
      },
    },
  };

  return (
    <div
      style={{
        marginTop: "35px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "900px",
        height: "520px",
      }}
    >
      <h2 style={{ color: "#0e3145" }}>Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyChart;
