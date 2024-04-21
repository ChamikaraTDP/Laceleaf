import TitleCard from "../../components/TitleCard";
import ItemCard from "../../components/ItemCard";
import items from "../../data/item-metadata.json";

const itemsArr = Object.values(items);

function Shop() {
  return (
    <div className="bg-bg-default min-h-screen py-20 px-20">
      <div className="flex justify-between">
        <TitleCard title="Flowers" subTitle="Best In Town" />
      </div>

      <div className="flex flex-wrap mt-20 gap-x-8 gap-y-20">
        {itemsArr.map((itm) => (
          <ItemCard key={itm.id} item={itm} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
