import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/sections/shared/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import StoreProvider from "@/store/StoreProvider";

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
        <Header />
        <StoreProvider store={store}>{children}</StoreProvider>
      </body>
    </html>
  );
}
