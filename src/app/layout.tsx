import type { Metadata } from "next";
import Sidebar from "../components/Sidbar";
import "./globals.css";
import { inter } from "./fonts";

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
      <body className={`${inter.className} grid grid-cols-12 text-gray-800`}>
        <div className="col-span-2 h-screen overflow-auto">
          <Sidebar />
        </div>
        <div className="col-span-10 h-screen overflow-auto">{children}</div>
      </body>
    </html>
  );
}
