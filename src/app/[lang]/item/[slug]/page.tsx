import ItemDetailCard from "../../../../components/ItemDetailCard";
import items from "../../../../data/item-metadata.json";
import { Locale } from "../../../../types/common";

export default function ItemDetailView({
  params,
}: {
  params: { slug: keyof typeof items, lang: Locale };
}) {
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

  return <ItemDetailCard lang={params.lang} item={item} nextItemKey={itemKeys[nextKey]} previousItemKey={itemKeys[prevKey]} />;
}
