import TitleCard from "../TitleCard";
import ItemCard from "./ItemCard";

function Shop() {
  return (
    <div className="bg-bg-default min-h-screen pt-20 px-20">
      <div className="flex justify-between">
        <TitleCard title="Flowers" subTitle="Best In Town" />

        {/* <div className="flex">
          <div className={`${prata.className} text-4xl`}>Flowers</div>
          <div className={`pl-2 text-xl font-extralight italic translate-y-4`}>
            Best In Town
          </div>
        </div> */}

        <div>
          <button className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200">View All</button>
        </div>
      </div>

      <div className="flex flex-wrap mt-20 gap-x-8 gap-y-20">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Shop;
