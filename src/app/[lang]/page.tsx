import ContactUs from "@components/home/ContactUs";
import CustomCarousel from "@components/carousel/CustomCarousel";
import AnnotatedImage from "@components/carousel/AnnotatedImage";
import TitleCard from "@components/TitleCard";
import Link from "next/link";
import ItemCard from "@components/ItemCard";
import ExpandableDesc from "@components/ExpandableDesc";
import { getDictionary, getFaq, getHomeData, getItemData } from "@/dictionaries";
import { Locale } from "@/types/common";
import { getSecondaryFont, getTertiaryFont } from "@app/fonts";


export default async function Home({ params }: { params: { lang: Locale } }) {
  const homeData = await getHomeData(params.lang);
  const dictionary = await getDictionary(params.lang);
  const questions = await getFaq(params.lang);
  const secondaryFont = getSecondaryFont(params.lang);
  const tertiaryFont = getTertiaryFont(params.lang);
  const items = await getItemData(params.lang);

  const itemsArr = Object.values(items).filter((item) => item.popular);

  return (
    <main className="bg-bg-default">
      {/* carousel  */}
      <div className="h-[240px] sm:h-[60vh] lg:h-screen w-full">
        <CustomCarousel autoSlide={true}>
          {homeData.sliderImages.map((img) => (
            <AnnotatedImage key={img.path} imgMeta={img} />
          ))}
        </CustomCarousel>
      </div>

      {/* shop */}
      <div className="bg-bg-default min-h-screen py-10 sm:py-20 px-4 sm:px-10 lg:px-20">
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

        <div className="flex flex-wrap mt-10 sm:mt-20 gap-x-5 sm:gap-x-8 gap-y-10 sm:gap-y-20 justify-center ">
          {itemsArr.map((itm) => (
            <ItemCard homeData={homeData} lang={params.lang} key={itm.id} item={itm} />
          ))}
        </div>
      </div>

      {/* about us */}
      <div className="bg-bg-sidebar py-10 sm:py-24 px-4 sm:px-10 lg:px-20">
        <TitleCard
          title={homeData.aboutUsTitle}
          subTitle={homeData.aboutUsSubTitle}
          lang={params.lang}
        />

        <div
          className={`${secondaryFont.className} w-3/4 lg:w-1/2 m-auto pt-10 sm:text-lg leading-6 sm:leading-8 text-center text-slate-700`}
        >
          {homeData.aboutUsDescription}
        </div>
      </div>

      {/* faq */}
      <div className="py-10 sm:py-24 px-4 sm:px-10 lg:px-20 bg-bg-default">
        <TitleCard
          title={homeData.faqTitle}
          subTitle={homeData.faqSubTitle}
          lang={params.lang}
        />

        <div className={`${secondaryFont.className} w-[90%] lg:w-3/5 m-auto pt-10`}>
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
    </main>
  );
}
