import Image from "next/image";
import Link from "next/link";
import { Locale, ShopItem } from "../types/common";

type ItemCardProps = {
  item: ShopItem;
  lang: Locale
};

function ItemCard({ item, lang  }: ItemCardProps) {
  return (
    <Link href={`/${lang}/item/${item.id}`} className="relative hover:shadow-md hover:shadow-red-200 cursor-pointer">
      <div className="relative w-[200px] h-[200px]">
        <Image
          alt="item image"
          src={item.shopImagePath}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 16px, (max-width: 1200px) 1024px, 512px"
          quality={40}
        />
      </div>

      {item.isInStock ? (
        <div className="absolute top-[165px] right-0 bg-bg-in-stock p-1 text-xs rounded-s">
          In Stock
        </div>
      ) : (
        <div className="absolute top-[165px] right-0 bg-bg-out-stock p-1 text-xs rounded-s">
          Out of Stock
        </div>
      )}

      <div className="bg-bg-shop-title">
        <div className="font-bold text-lg text-center text-slate-700">
          {item.title}
        </div>
        
        {/* <div className="text-center">3Y old</div> */}
      </div>

      <div className="bg-slate-100">
        <div className="text-center">Rs. {item.shopPrice} /=</div>
      </div>
    </Link>
  );
}

export default ItemCard;
