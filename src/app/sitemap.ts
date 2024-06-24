import { MetadataRoute } from "next";
import items from "@/data/item-metadata.en.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const itemPaths = Object.keys(items).map((val) => "item/" + val);
  const paths = ["", "shop", ...itemPaths];

  // TODO:: use locale enum after adding tamil lang support
  const languages = ["en", "si"];

  const siteMapMeta = [];
  const now = new Date();

  for (const path of paths) {
    const alternates = languages.reduce((aggr, curr) => {
      aggr[curr] = `${process.env.BASE_URL}/${curr}${path ? "/" + path : ""}`;
      return aggr;
    }, {} as any);

    const pages = Object.values(alternates).map((alt) => {
      return {
        url: alt as string,
        lastModified: now,
        alternates: {
          languages: alternates,
        },
      };
    });

    siteMapMeta.push(...pages);
  }

  return siteMapMeta;
}
