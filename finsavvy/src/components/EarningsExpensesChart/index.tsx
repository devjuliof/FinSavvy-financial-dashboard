import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Chart,
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
  const chartRef = useRef<Chart<"bar", number[]> | null>(null);

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
    maintainAspectRatio: false,
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

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h2 style={{ color: "#0e3145" }}>Statistics</h2>
      <div style={{ position: "relative", width: "100%", height: "350px" }}>
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </>
  );
};

export default MonthlyChart;
