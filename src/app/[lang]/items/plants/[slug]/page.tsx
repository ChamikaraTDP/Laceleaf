import ItemDetailCard from "@components/ItemDetailCard";
import items from "@/data/item-metadata.en.json";
import { getDictionary, getHomeData, getItemData } from "@/dictionaries";
import { Locale } from "@/types/common";
import { getSecondaryFont, getTertiaryFont } from "@app/fonts";
import { Metadata } from "next";

type Props = {
  params: { slug: keyof typeof items; lang: Locale };
};

export async function generateStaticParams() {
  return Object.keys(items).map((itemKey) => ({
    slug: itemKey,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const itemsLocale = await getItemData(params.lang);
  const dictionary = await getDictionary(params.lang);

  const item = itemsLocale[params.slug];

  return {
    title:
      item.title + " " + dictionary.anthuriumVariant + " | Sujatha's Anthurium",
    description: item.description,
    alternates: {
      languages : {
        "en": `${process.env.BASE_URL}/en/items/plants/${params.slug}`,
        "si": `${process.env.BASE_URL}/si/items/plants/${params.slug}`,
        "x-default": `${process.env.BASE_URL}/en/items/plants/${params.slug}`
      }
    },
    openGraph: {
      title: item.title + " " + dictionary.anthuriumVariant + " | Sujatha's Anthurium",
      description: item.description,
      url: `${process.env.BASE_URL}/${params.lang}/items/plants/${params.slug}`,
      siteName: "Sujatha's Anthurium",
      images: [
        {
          url: `${process.env.BASE_URL}${item.shopImagePath}`, 
        },
      ],
      locale: params.lang,
      type: 'website',
    },
  };
}

export default async function ItemDetailView({ params }: Props) {
  const homeData = await getHomeData(params.lang);
  const itemsLocale = await getItemData(params.lang);
  const dictionary = await getDictionary(params.lang);

  const secondaryFont = getSecondaryFont(params.lang);
  const tertiaryFont = getTertiaryFont(params.lang);

  const item = itemsLocale[params.slug];

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

  return (
    <ItemDetailCard
      homeData={homeData}
      dictionary={dictionary}
      lang={params.lang}
      item={item}
      nextItemKey={itemKeys[nextKey]}
      previousItemKey={itemKeys[prevKey]}
      secondaryFont={secondaryFont}
      tertiaryFont={tertiaryFont}
    />
  );
}
