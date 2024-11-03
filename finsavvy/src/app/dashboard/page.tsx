"use client";

import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Overview from "@/components/Overview";
import MySavings from "@/components/MySavings";
import { isMobileOrTablet } from "../../../utils/isMobileOrTablet";
import MenuMobile from "@/components/MenuMobile";
import { useSession } from "next-auth/react";

type Page = "overview" | "mySavings";

interface SessionUser {
  image: string;
  name: string;
  email: string;
}

interface Session {
  user: SessionUser;
}

export default function Dashboard() {
  const { data: session } = useSession() as { data: Session };

  const [currentPage, setCurrentPage] = React.useState<Page>("overview");
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileOrTablet());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div style={{ display: "flex" }}>
      {isMobile ? (
        <MenuMobile currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ) : (
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header
          image={session?.user.image}
          name={session?.user.name}
          email={session?.user.email}
        />
        {renderPage()}
      </div>
    </div>
  );
}
