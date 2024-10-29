"use client";

import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Overview from "@/components/Overview";
import MySavings from "@/components/MySavings";
import { FinanceDataProvider } from "../../contexts/FinanceDataContext";

type Page = "overview" | "mySavings";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = React.useState<Page>("overview");

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <Overview />;
      case "mySavings":
        return <MySavings />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <FinanceDataProvider>
        <div style={{ display: "flex" }}>
          <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />
            {renderPage()}
          </div>
        </div>
      </FinanceDataProvider>
    </>
  );
}
