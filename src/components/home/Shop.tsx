import TitleCard from "../TitleCard";
import ItemCard from "../ItemCard";
import items from '../../data/item-metadata.json';
import Link from "next/link";
import homeData from '../../data/home-data.json';


const itemsArr = Object.values(items).filter((item) => item.popular);

function Shop() {
  return (
    <div className="bg-bg-default min-h-screen py-20 px-20">
      <div className="flex justify-between">
        <TitleCard title={homeData.shopTitle} subTitle={homeData.shopSubTitle} />
        
        <div>
          <Link href="/shop" className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200">View All</Link>
        </div>
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
