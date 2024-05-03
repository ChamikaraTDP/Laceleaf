"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import { Locale } from "../types/common";

type SidbarProps = {
  lang: string;
  homeData: any;
  dictionary: any;
}

export default function Sidebar({ lang, homeData, dictionary }: SidbarProps) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = debounce((term: string) => {
    replace(`/${lang}/shop?query=${term}`);
  }, 350);

  const titles = homeData.categories;
  const subTitles = [
    homeData.shopTitle,
    homeData.aboutUsTitle,
    homeData.faqTitle,
    homeData.contactUsTitle,
  ];

  return (
    <div className="px-10 h-screen w-full overflow-auto bg-bg-sidebar flex flex-col border-r border-slate-200">
      <div className="pt-10 pb-5">
        {/* <h1 className="text-slate-700 text-3xl">Sujatha&apos;s Anthurium</h1> */}

        <Link href={`/${lang}`} className="cursor-pointer">
          <Image
            alt="Sujathas-Anthurium Title Image"
            src={"/Sujathas-Anthurium.png"}
            width={172}
            height={58}
          />
        </Link>
      </div>

      <div className="py-2">
        <div className="flex border-b border-solid border-slate-300 justify-between p-1">
          <input
            className="outline-none bg-transparent w-16 grow basis-16"
            type="text"
            placeholder={dictionary.search}
            onChange={(evt) => {
              handleSearch(evt.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString() || ""}
          />
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="flex flex-col grow justify-between">
        <div className="mt-7">
          {titles.map((ttl: string) => {
            return (
              <Link key={ttl} href={`/${lang}/shop#${ttl}`} className="cursor-pointer">
                <h2 className={`text-black font-light ${lang === Locale.en ? 'text-2xl' : 'text-3xl'} mb-6 uppercase hover:text-txt-hover`}>
                  {ttl}
                </h2>
              </Link>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col">
          <div className="basis-32 shrink-1">
            {subTitles.map((ttl) => {
              return (
                <Link key={ttl} href={`/${lang}/#${ttl}`} className="cursor-pointer">
                  <h2
                    key={ttl}
                    className={`text-slate-600 font-semibold ${lang === Locale.en ? 'text-base' : 'text-xl'} mb-3 hover:text-txt-hover`}
                  >
                    {ttl}
                  </h2>
                </Link>
              );
            })}
          </div>

          <div className="pt-5 pb-10">
            <div className="flex">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width={30}
                height={30}
                className="pr-2 pb-2"
              />
              <h2>{homeData.telNo}</h2>
            </div>

            <div>
              <a
                className="flex hover:text-txt-hover"
                href={`mailto:${homeData.email}`}
              >
                <Image
                  src="/icons/mail.svg"
                  alt="mail icon"
                  width={30}
                  height={30}
                  className="pr-2"
                />
                {homeData.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
