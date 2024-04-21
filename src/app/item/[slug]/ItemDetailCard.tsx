import Image from "next/image";
import ImageCarousel from "../../../components/carousel/ImageCarousel";
import { prata, roboto } from "../../fonts";
import Link from "next/link";

type ItemDetailCardProps = {
  item: {
    images: any[];
    title: string;
    description: string;
  };
  nextItemKey: string;
  previousItemKey: string;
};

export default function ItemDetailCard({
  item,
  nextItemKey,
  previousItemKey,
}: ItemDetailCardProps) {
  return (
    <div className="min-h-screen w-full flex">
      <div className="min-h-full w-3/4">
        <ImageCarousel
          images={item.images}
          showThumbnail
          autoSlide={false}
          showLinkDots={false}
        />
      </div>

      <div className="min-h-full w-1/4">
        <div className="flex bg-bg-default justify-evenly py-2">
          <Link
            className="rounded-full flex justify-center items-center bg-white w-10 h-10 hover:bg-focus-primary"
            href={`/item/${previousItemKey}`}
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
            href={`/item/${nextItemKey}`}
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
          <div className={`${prata.className} text-2xl font-bold text-slate-800`}>{item.title}</div>
        </div>

        <p className={`${roboto.className} p-4 text-slate-700`}>{item.description}</p>
      </div>
    </div>
  );
}
