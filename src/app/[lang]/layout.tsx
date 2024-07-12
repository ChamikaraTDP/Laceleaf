import { Metadata } from "next";
import Sidebar from "@components/Sidebar";
import "@app/globals.css";
import { getPrimaryFont } from "@app/fonts";
import { getDictionary, getHomeData } from "@/dictionaries";
import { Locale } from "@/types/common";
import { Suspense } from "react";
import { SidebarSkeleton } from "@components/skeletons";
import Footer from "@components/home/Footer";

export const metadata: Metadata = {
  title: "Sujatha's Anthurium | Florist Sri Lanka | Anthurium Flowers & Plants",
  description: "Healthly, beautiful anthurium plants & flowers for affordable price",
  alternates: {
    languages : {
      "en": `${process.env.BASE_URL}/en`,
      "si": `${process.env.BASE_URL}/si`,
      "x-default": `${process.env.BASE_URL}/en`
    }
  },
  openGraph: {
    title: "Sujatha's Anthurium | Florist Sri Lanka | Anthurium Flowers & Plants",
    description: 'Healthly, beautiful anthurium plants & flowers for affordable price',
    url: process.env.BASE_URL,
    siteName: "Sujatha's Anthurium",
    images: [
      {
        url: `${process.env.BASE_URL}/images/slider/Red-anthurium-large.jpg`, // Must be an absolute URL
        // width: 800,
        // height: 600,
      },
      {
        url: `${process.env.BASE_URL}/images/slider/Anthurium-garden.JPG`, // Must be an absolute URL
        // width: 1800,
        // height: 1600,
        // alt: 'My custom alt',
      },
    ],
    locale: 'en',
    type: 'website',
  },
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
        <div className="col-span-12 xl:col-span-2">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar
              homeData={homeData}
              lang={params.lang}
              dictionary={dictionary}
            />
          </Suspense>
        </div>

        <div className="col-span-12 xl:col-span-10 h-screen overflow-auto">
          {children}

          {/* footer */}
          <Footer homeData={homeData} />
        </div>
      </body>
    </html>
  );
}
