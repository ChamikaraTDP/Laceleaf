import Image from "next/image";
import ImageCarousel from "./carousel/ImageCarousel";
import { prata, roboto } from "../app/fonts";
import Link from "next/link";
import { Locale, ShopItem } from "../types/common";

type ItemDetailCardProps = {
  item: ShopItem;
  nextItemKey: string;
  previousItemKey: string;
  lang: Locale;
  homeData: any;
};

export default function ItemDetailCard({
  item,
  nextItemKey,
  previousItemKey,
  lang,
  homeData,
}: ItemDetailCardProps) {
  return (
    <div className="min-h-screen w-full flex">
      <div className="relative min-h-full w-3/4">
        <ImageCarousel
          images={item.images.map((img) => ({
            ...img,
            altText: `${item.altDesc} ${img.title}`
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
              alt="Go back icon"
              width={28}
              height={20}
            />
            Go Back
          </Link>
        </div>
      </div>

      <div className="h-screen overflow-auto w-1/4">
        <div className="flex bg-bg-default justify-evenly py-2">
          <Link
            className="rounded-full flex justify-center items-center bg-white w-10 h-10 hover:bg-focus-primary"
            href={`/${lang}/item/${previousItemKey}`}
          >
            <Image
              src="/icons/previous-black.svg"
              alt="previous icon"
              width={20}
              height={24}
              className="h-6"
            />
          </Link>

          <Link
            className="rounded-full flex justify-center items-center bg-white w-10 h-10 hover:bg-focus-primary"
            href={`/${lang}/item/${nextItemKey}`}
          >
            <Image
              src="/icons/next-black.svg"
              alt="next icon"
              width={20}
              height={24}
              className="h-6"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center pt-6">
          <div
            className={`${prata.className} text-2xl font-bold text-slate-800`}
          >
            {item.title}
          </div>
        </div>

        <p className={`${roboto.className} text-base/5 p-4 text-slate-700`}>
          {item.description}
        </p>

        <div className="p-4">
          <h4 className="text-lg text-center">Anatomy</h4>

          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg-default">
                <th className="text-left pl-2">Characteristic</th>
                <th className="text-left pl-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spathe Color</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.spathe.color.join(", ")}
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spadix Color</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.spadix.color.join(", ")}
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spathe Shape</td>
                <td className="py-1 pl-2">{item.anatomy?.spathe.shape}</td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Plant Height</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.tree["hight-min"]}-
                  {item.anatomy?.tree["hight-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Plant Spread</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.tree["width-min"]}-
                  {item.anatomy?.tree["width-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spathe Length</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.spathe["length-min"]}-
                  {item.anatomy?.spathe["length-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spathe Width</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.spathe["width-min"]}-
                  {item.anatomy?.spathe["width-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Spadix Length</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.spadix["length-old-min"]}-
                  {item.anatomy?.spadix["length-old-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Leaf Length</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.leaf["length-min"]}-
                  {item.anatomy?.leaf["length-max"]} inch
                </td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Leaf Width</td>
                <td className="py-1 pl-2">
                  {item.anatomy?.leaf["width-min"]}-
                  {item.anatomy?.leaf["width-max"]} inch
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4">
          <h4 className="text-lg text-center">Prices</h4>

          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg-default">
                <th className="text-left pl-2">Size</th>
                <th className="text-left pl-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Small Plants</td>
                <td className="py-1 pl-2">250 /=</td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Medium Plants</td>
                <td className="py-1 pl-2">450 /=</td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Mother Plants</td>
                <td className="py-1 pl-2">750 /=</td>
              </tr>
              <tr className="border-b border-bg-primary">
                <td className="py-1 pl-2">Bushes</td>
                <td className="py-1 pl-2">1250 /=</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4">
          <h4 className="text-center">Size Description</h4>

          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="pl-2">Small&nbsp;Plants</td>
                <td className="pl-2">3-5 inch , without flowers</td>
              </tr>
              <tr className="border-b">
                <td className="pl-2">Medium&nbsp;Plants</td>
                <td className="pl-2">4-6 inch , with flowers</td>
              </tr>
              <tr className="border-b">
                <td className="pl-2">Mother&nbsp;Plants</td>
                <td className="pl-2">
                  7-36 inch, with flowers, Plant size vary based on variety
                </td>
              </tr>
              <tr className="border-b">
                <td className="pl-2">Bushes</td>
                <td className="pl-2">
                  More than one Plant, (7 - 36) inch, with flowers, Plant size
                  vary based on variety
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
