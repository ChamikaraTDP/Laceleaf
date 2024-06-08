import Image from "next/image";
import Link from "next/link";
import { Locale, ShopItem } from "../types/common";

type ItemCardProps = {
  item: ShopItem;
  lang: Locale
};

function ItemCard({ item, lang  }: ItemCardProps) {
  return (
    <Link href={`/${lang}/item/${item.id}`} className="relative w-[150px] sm:w-[200px] hover:shadow-md hover:shadow-red-200 cursor-pointer">
      <div className="relative w-[150px] h-[160px] sm:w-[200px] sm:h-[200px]">
        <Image
          alt="item image"
          src={item.shopImagePath}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(min-width: 640px) 200px, (min-width: 1200px) 400px, 160px"
          quality={40}
        />
      </div>

      {item.isInStock ? (
        <div className="absolute top-[125px] sm:top-[165px] right-0 bg-bg-in-stock p-1 text-xs rounded-s">
          In Stock
        </div>
      ) : (
        <div className="absolute top-[125px] sm:top-[165px] right-0 bg-bg-out-stock p-1 text-xs rounded-s">
          Out of Stock
        </div>
      )}

      <div className="bg-bg-shop-title">
        <div className="font-bold sm:text-lg text-center text-wrap text-slate-700">
          {item.title}
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="text-center text-sm sm:text-base">Rs. {item.shopPrice} /=</div>
      </div>
    </Link>
  );
}

export default ItemCard;
