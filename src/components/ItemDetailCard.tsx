import Image from "next/image";
import ImageCarousel from "./carousel/ImageCarousel";
import Link from "next/link";
import { Locale, ShopItem } from "../types/common";
import { NextFont } from "next/dist/compiled/@next/font";

type ItemDetailCardProps = {
  item: ShopItem;
  nextItemKey: string;
  previousItemKey: string;
  lang: Locale;
  homeData: any;
  dictionary: any;
  secondaryFont: NextFont;
  tertiaryFont: NextFont;
};

export default function ItemDetailCard({
  item,
  nextItemKey,
  previousItemKey,
  lang,
  homeData,
  dictionary,
  secondaryFont,
  tertiaryFont,
}: ItemDetailCardProps) {
  return (
    <div className="w-full flex flex-col 2xl:flex-row">
      <div className="relative h-[60vh] xl:h-[80vh] 2xl:h-screen w-full 2xl:w-3/4">
        <ImageCarousel
          images={item.images.map((img) => ({
            ...img,
            altText: `${item.altDesc} ${img.title}`,
          }))}
          showThumbnail
          autoSlide={false}
          showLinkDots={false}
        />

        <div className="absolute top-5 left-5 text-white">
          <Link
            className="rounded-full px-4 py-2 flex gap-2 hover:bg-[#F68F8F5F]"
            href={`/${lang}/#${homeData.shopTitle}`}
          >
            <Image
              src="/icons/back.svg"
              alt="Arrow pointing to left"
              width={28}
              height={20}
            />
            {dictionary.goBack}
          </Link>
        </div>
      </div>

      <div className="2xl:h-screen 2xl:overflow-auto w-full 2xl:w-1/4">
        <div className="flex bg-bg-default justify-evenly py-2">
          <Link
            className="rounded-full flex justify-center items-center bg-white w-10 h-10 hover:bg-focus-primary"
            href={`/${lang}/items/plants/${previousItemKey}`}
          >
            <Image
              src="/icons/previous-black.svg"
              alt="Arrow head pointing to left"
              width={20}
              height={24}
              className="h-6"
            />
          </Link>

          <Link
            className="rounded-full flex justify-center items-center bg-white w-10 h-10 hover:bg-focus-primary"
            href={`/${lang}/items/plants/${nextItemKey}`}
          >
            <Image
              src="/icons/next-black.svg"
              alt="Arrow head pointing to right"
              width={20}
              height={24}
              className="h-6"
            />
          </Link>
        </div>

        <div>
          <div className="flex justify-center items-center pt-6">
            <div
              className={`${tertiaryFont.className} text-2xl font-bold text-slate-800`}
            >
              {item.title}
            </div>
          </div>

          <p
            className={`${secondaryFont.className} text-base/5 p-4 text-slate-700 md:px-14 lg:px-0 lg:w-4/5 2xl:w-full 2xl:p-4 mx-auto`}
          >
            {item.description}
          </p>
        </div>

        <div className="md:flex md:px-10 2xl:flex-col 2xl:px-0">
          <div className="p-4 w-full">
            <h4
              className={`${lang === "en" ? "text-lg" : "text-xl"} text-center`}
            >
              {dictionary.anatomy}
            </h4>

            <table
              className={`w-full ${lang === "en" ? "text-sm" : "text-base"}`}
            >
              <thead>
                <tr className="bg-bg-default">
                  <th className="text-left pl-2">
                    {dictionary.characteristic}
                  </th>
                  <th className="text-left pl-2">{dictionary.value}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spatheColor}</td>
                  <td className="py-1 pl-2">
                    {item.anatomy?.spathe.color.join(", ")}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spadixColor}</td>
                  <td className="py-1 pl-2">
                    {item.anatomy?.spadix.color.join(", ")}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spatheShape}</td>
                  <td className="py-1 pl-2">{item.anatomy?.spathe.shape}</td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.plantHeight}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.tree["hight-min"]}-
                    {item.anatomy?.tree["hight-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.plantSpread}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.tree["width-min"]}-
                    {item.anatomy?.tree["width-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spatheLength}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.spathe["length-min"]}-
                    {item.anatomy?.spathe["length-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spatheWidth}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.spathe["width-min"]}-
                    {item.anatomy?.spathe["width-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.spadixLength}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.spadix["length-old-min"]}-
                    {item.anatomy?.spadix["length-old-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.leafLength}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.leaf["length-min"]}-
                    {item.anatomy?.leaf["length-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
                <tr className="border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.leafWidth}</td>
                  <td className="py-1 pl-2">
                    {lang === "si" && dictionary.inch}{" "}
                    {item.anatomy?.leaf["width-min"]}-
                    {item.anatomy?.leaf["width-max"]}{" "}
                    {lang === "en" && dictionary.inch}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 w-full">
            <h4
              className={`${lang === "en" ? "text-lg" : "text-xl"} text-center`}
            >
              {dictionary.prices}
            </h4>

            <table
              className={`w-full ${lang === "en" ? "text-sm" : "text-base"}`}
            >
              <thead>
                <tr className="bg-bg-default">
                  <th className="text-left pl-2">{dictionary.size}</th>
                  <th className="text-left pl-2">{dictionary.price}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-nowrap border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.smallPlants}</td>
                  <td className="py-1 pl-2">250 /=</td>
                </tr>
                <tr className="text-nowrap border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.mediumPlants}</td>
                  <td className="py-1 pl-2">450 /=</td>
                </tr>
                <tr className="text-nowrap border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.motherPlants}</td>
                  <td className="py-1 pl-2">750 /=</td>
                </tr>
                <tr className="text-nowrap border-b border-bg-primary">
                  <td className="py-1 pl-2">{dictionary.bushes}</td>
                  <td className="py-1 pl-2">1250 /=</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 md:px-10">
          <h4
            className={`${lang === "en" ? "text-lg" : "text-xl"} text-center`}
          >
            {dictionary.sizeDescription}
          </h4>

          <table
            className={`w-full ${lang === "en" ? "text-sm" : "text-base"}`}
          >
            <tbody>
              <tr className="border-b">
                <td className="pl-2 text-nowrap">{dictionary.smallPlants}</td>
                <td className="pl-2">{homeData.smallPlantsDesc}</td>
              </tr>
              <tr className="border-b">
                <td className="pl-2 text-nowrap">{dictionary.mediumPlants}</td>
                <td className="pl-2">{homeData.mediumPlantsDesc}</td>
              </tr>
              <tr className="border-b">
                <td className="pl-2 text-nowrap">{dictionary.motherPlants}</td>
                <td className="pl-2">{homeData.motherPlantsDesc}</td>
              </tr>
              <tr className="border-b">
                <td className="pl-2 text-nowrap">{dictionary.bushes}</td>
                <td className="pl-2">{homeData.bushesDesc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
