import ItemGroupCard from "../../../components/ItemGroupCard";
import items from "../../../data/item-metadata.json";
import { getHomeData } from "../../../dictionaries";
import { Locale } from "../../../types/common";

const itemsArr = Object.values(items);
const popularItems = itemsArr.filter((item) => item.popular);

async function Shop(
  {
    searchParams,
    params,
  }: {
    searchParams?: {
      query?: string;
    };
    params: { lang: Locale },
  }
) {
  const homeData = await getHomeData(params.lang);

  const query = searchParams?.query || '';
  const regx = new RegExp(query, 'i');
  const queriedPopular = query ? popularItems.filter((itm) => regx.test(itm.title)) : popularItems;
  
  return (
    <div className="bg-bg-default min-h-screen py-20 px-20">
      <ItemGroupCard lang={params.lang} title={"Popular"} items={queriedPopular} />

      {homeData.categories.map((category) => {
        const groupItems = itemsArr.filter((item) => {
          return item.category === category && (query ? regx.test(item.title) : true);
        });

        return (
          <ItemGroupCard lang={params.lang} key={category} title={category} items={groupItems} />
        );
      })}
    </div>
  );
}

export default Shop;
