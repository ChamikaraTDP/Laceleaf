import ItemDetailCard from "../../../../components/ItemDetailCard";
import items from "../../../../data/item-metadata.en.json";
import { getHomeData } from "../../../../dictionaries";
import { Locale } from "../../../../types/common";

export async function generateStaticParams() {
  return Object.keys(items).map((itemKey) => ({
    slug: itemKey,
  }));
}

export default async function ItemDetailView({
  params,
}: {
  params: { slug: keyof typeof items, lang: Locale };
}) {
  const homeData = await getHomeData(params.lang);

  const item = items[params.slug];

  if (!item) {
    return (
      <div>
        <h2>Item not available!</h2>
      </div>
    );
  }

  const itemKeys = Object.keys(items);
  const slugIndex = itemKeys.findIndex((key) => key === params.slug);
  const nextKey = (slugIndex + 1) % itemKeys.length;
  const prevKey = (slugIndex - 1 + itemKeys.length) % itemKeys.length;

  return <ItemDetailCard homeData={homeData} lang={params.lang} item={item} nextItemKey={itemKeys[nextKey]} previousItemKey={itemKeys[prevKey]} />;
}
