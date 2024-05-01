import TitleCard from "./TitleCard";
import ItemCard from "./ItemCard";
import { Locale, ShopItem } from "../types/common";

interface ItemGroupCardProps {
  title: string;
  items: ShopItem[];
  lang: Locale,
}

function ItemGroupCard({ title, items, lang }: ItemGroupCardProps) {
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <TitleCard title={title} subTitle="" />
      </div>

      <div className="flex flex-wrap mt-20 gap-x-8 gap-y-20">
        {items.map((itm) => (
          <ItemCard key={itm.id} item={itm} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default ItemGroupCard;
