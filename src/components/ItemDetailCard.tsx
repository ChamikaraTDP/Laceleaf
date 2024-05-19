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
          images={item.images}
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

      <div className="min-h-full w-1/4">
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

        <div className="flex justify-center items-center py-4 pt-6">
          <div
            className={`${prata.className} text-2xl font-bold text-slate-800`}
          >
            {item.title}
          </div>
        </div>

        <p className={`${roboto.className} p-4 text-slate-700`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
