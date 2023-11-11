import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_styles/globals.css";
import Providers from "@/app/_styles/Probider";
import React from "react";
import Header from "@organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HBH",
  description: "꿀벌이 되기 위한 날개짓들",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} px-4`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
