import TitleCard from "../TitleCard";
import ItemCard from "./ItemCard";
import items from './items.json';

function Shop() {
  return (
    <div className="bg-bg-default min-h-screen py-20 px-20">
      <div className="flex justify-between">
        <TitleCard title="Flowers" subTitle="Best In Town" />
        
        <div>
          <button className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200">View All</button>
        </div>
      </div>

      <div className="flex flex-wrap mt-20 gap-x-8 gap-y-20">
        {items.map((itm) => (
          <ItemCard key={itm.id} item={itm} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
