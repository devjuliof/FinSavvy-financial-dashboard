"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderWrapperProps {
  children: ReactNode;
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
