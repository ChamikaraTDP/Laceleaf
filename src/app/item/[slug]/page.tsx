import ItemDetailCard from "./ItemDetailCard";
import items from "../../../data/item-metadata.json";

export default function ItemDetailView({
  params: { slug },
}: {
  params: { slug: keyof typeof items };
}) {
  const item = items[slug];

  if (!item) {
    return (
      <div>
        <h2>Item not available!</h2>
      </div>
    );
  }

  const itemKeys = Object.keys(items);
  const slugIndex = itemKeys.findIndex((key) => key === slug);
  const nextKey = (slugIndex + 1) % itemKeys.length;
  const prevKey = (slugIndex - 1 + itemKeys.length) % itemKeys.length;

  return <ItemDetailCard item={item} nextItemKey={itemKeys[nextKey]} previousItemKey={itemKeys[prevKey]} />;
}
