import ContactUs from "../../components/home/ContactUs";
import Footer from "../../components/home/Footer";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import AnnotatedImage from "../../components/carousel/AnnotatedImage";
import TitleCard from "../../components/TitleCard";
import Link from "next/link";
import items from "../../data/item-metadata.json";
import ItemCard from "../../components/ItemCard";
import ExpandableDesc from "../../components/ExpandableDesc";
import { getDictionary, getFaq, getHomeData } from "../../dictionaries";
import { Locale } from "../../types/common";
import { getSecondaryFont, getTertiaryFont } from "../fonts";

const itemsArr = Object.values(items).filter((item) => item.popular);

export default async function Home({ params }: { params: { lang: Locale } }) {
  const homeData = await getHomeData(params.lang);
  const dictionary = await getDictionary(params.lang);
  const questions = await getFaq(params.lang);
  const secondaryFont = getSecondaryFont(params.lang);
  const tertiaryFont = getTertiaryFont(params.lang);

  return (
    <main className="bg-bg-default h-screen">
      {/* carousel  */}
      <div className="h-screen w-full">
        <CustomCarousel autoSlide={true}>
          {homeData.sliderImages.map((img) => (
            <AnnotatedImage key={img.path} imgMeta={img} />
          ))}
        </CustomCarousel>
      </div>

      {/* shop */}
      <div className="bg-bg-default min-h-screen py-20 px-20">
        <div className="flex justify-between">
          <TitleCard
            title={homeData.shopTitle}
            subTitle={homeData.shopSubTitle}
            lang={params.lang}
          />

          <div>
            <Link
              href={`/${params.lang}/shop`}
              className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200"
            >
              {dictionary.viewAll}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap mt-20 gap-x-8 gap-y-20">
          {itemsArr.map((itm) => (
            <ItemCard lang={params.lang} key={itm.id} item={itm} />
          ))}
        </div>
      </div>

      {/* about us */}
      <div className="py-24 px-20">
        <TitleCard
          title={homeData.aboutUsTitle}
          subTitle={homeData.aboutUsSubTitle}
          lang={params.lang}
        />

        <div
          className={`${secondaryFont.className} leading-8 w-1/2 m-auto pt-10 text-lg text-center text-slate-700`}
        >
          {homeData.aboutUsDescription}
        </div>
      </div>

      {/* faq */}
      <div className="py-24 px-20 bg-bg-default">
        <TitleCard
          title={homeData.faqTitle}
          subTitle={homeData.faqSubTitle}
          lang={params.lang}
        />

        <div className={`${secondaryFont.className} w-3/5 m-auto pt-10`}>
          {questions.map((qt) => (
            <ExpandableDesc
              key={qt.title}
              title={qt.title}
              desc={qt.description}
            />
          ))}
        </div>
      </div>

      {/* contact us */}
      <ContactUs homeData={homeData} dictionary={dictionary} lang={params.lang} tertiaryFont={tertiaryFont} />

      {/* footer */}
      <Footer homeData={homeData} />
    </main>
  );
}
