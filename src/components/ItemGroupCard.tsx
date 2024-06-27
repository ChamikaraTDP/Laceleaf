import TitleCard from "./TitleCard";
import ItemCard from "./ItemCard";
import { Locale, ShopItem } from "../types/common";

interface ItemGroupCardProps {
  title: string;
  items: ShopItem[];
  lang: Locale;
  homeData: any;
}

function ItemGroupCard({ title, items, lang, homeData }: ItemGroupCardProps) {
  return (
    <div className="py-5 sm:py-10">
      <div className="flex justify-between">
        <TitleCard title={title} subTitle="" lang={lang} />
      </div>

      <div className="flex flex-wrap justify-center mt-5 sm:mt-20 gap-x-5 sm:gap-x-8 gap-y-8 sm:gap-y-20">
        {items.map((itm) => (
          <ItemCard homeData={homeData} key={itm.id} item={itm} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default ItemGroupCard;
