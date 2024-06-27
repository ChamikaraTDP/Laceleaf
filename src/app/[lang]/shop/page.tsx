import ItemGroupCard from "@components/ItemGroupCard";
import { getDictionary, getHomeData, getItemData } from "@/dictionaries";
import { Locale } from "@/types/common";


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
  const dictionary = await getDictionary(params.lang);
  const itemsLocale = await getItemData(params.lang);

  const itemsArr = Object.values(itemsLocale);
  const popularItems = itemsArr.filter((item) => item.popular);

  const query = searchParams?.query || '';
  const regx = new RegExp(query, 'i');
  const queriedPopular = query ? popularItems.filter((itm) => regx.test(itm.title)) : popularItems;
  
  return (
    <div className="bg-bg-default min-h-screen py-4 sm:py-20 px-4 sm:px-10 lg:px-20">
      <ItemGroupCard homeData={homeData} lang={params.lang} title={dictionary.popular} items={queriedPopular} />

      {homeData.categories.map((category) => {
        const groupItems = itemsArr.filter((item) => {
          return item.category.toLowerCase() === category.toLowerCase() && (query ? regx.test(item.title) : true);
        });

        return (
          <ItemGroupCard homeData={homeData} lang={params.lang} key={category} title={category} items={groupItems} />
        );
      })}
    </div>
  );
}

export default Shop;
