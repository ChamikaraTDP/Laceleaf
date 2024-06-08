import type { Metadata } from "next";
import Sidebar from "@components/Sidebar";
import "@app/globals.css";
import { getPrimaryFont } from "@app/fonts";
import { getDictionary, getHomeData } from "@/dictionaries";
import { Locale } from "@/types/common";
import { Suspense } from "react";
import { SidebarSkeleton } from "@components/skeletons";

export const metadata: Metadata = {
  title: "Sujatha's Anthurium",
  description: "All your needs with Anthurium",
};

export async function generateStaticParams() {
  return ["en", "si"].map((lang) => ({
    lang,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const homeData = await getHomeData(params.lang);
  const dictionary = await getDictionary(params.lang);
  const primaryFont = getPrimaryFont(params.lang);

  return (
    <html lang={params.lang}>
      <body
        className={`${primaryFont.className} grid grid-cols-12 text-gray-800`}
      >
        <div className="col-span-12 lg:col-span-2">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar
              homeData={homeData}
              lang={params.lang}
              dictionary={dictionary}
            />
          </Suspense>
        </div>

        <div className="col-span-12 lg:col-span-10 h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
