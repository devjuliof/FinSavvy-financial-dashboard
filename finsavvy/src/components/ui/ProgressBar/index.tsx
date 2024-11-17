import React from "react";

interface ProgressBarProps {
  currentAmount?: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentAmount = 0,
  goal,
}) => {
  const progress = (currentAmount / goal) * 100;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          backgroundColor: progress >= 100 ? "green" : "#3cd7c7",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: `-10px`,
            top: "50%",
            transform: "translateY(-50%)",
            width: "30px",
            height: "30px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "3px solid #3cd7c7",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
