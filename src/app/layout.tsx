import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import StoreProvider from "@/store/StoreProvider";
import Layout from "@/sections/shared/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Cinema",
  description: "Browse movies & create custom lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider store={store}>
          <Layout />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
