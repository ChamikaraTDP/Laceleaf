import type { Metadata } from "next";
import Sidebar from "../../components/Sidbar";
import "../globals.css";
import { inter } from "../fonts";
import { getHomeData } from "../../dictionaries";
import { Locale } from "../../types/common";

export const metadata: Metadata = {
  title: "Sujatha's Anthurium",
  description: "All your needs with Anthurium",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const homeData = await getHomeData(params.lang);

  return (
    <html lang={params.lang}>
      <body className={`${inter.className} grid grid-cols-12 text-gray-800`}>
        <div className="col-span-2 h-screen overflow-auto">
          <Sidebar homeData={homeData} lang={params.lang} />
        </div>
        <div className="col-span-10 h-screen overflow-auto">{children}</div>
      </body>
    </html>
  );
}
