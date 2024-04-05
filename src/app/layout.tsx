import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import Sidebar from "./components/Sidbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const prata = Prata({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Sujatha's Anthurium",
  description: "All your needs with Anthurium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-12`}>
        <div className="col-span-2 h-screen overflow-auto">
          <Sidebar />
        </div>
        <div className="col-span-10 h-screen overflow-auto">{children}</div>
      </body>
    </html>
  );
}
