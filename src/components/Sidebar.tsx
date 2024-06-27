"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import { Locale } from "../types/common";
import { useState } from "react";
import { abhaya, inter } from "../app/fonts";

type SidbarProps = {
  lang: string;
  homeData: any;
  dictionary: any;
};

export default function Sidebar({ lang, homeData, dictionary }: SidbarProps) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div
      className={`sm:pl-10 xl:pl-5 2xl:pl-10 ${
        isExpanded ? "h-auto" : "h-[85px] sm:h-[100px]"
      } xl:h-screen w-full overflow-hidden xl:overflow-auto bg-bg-sidebar flex flex-col border-r border-slate-200`}
    >
      <div className="text-sm flex justify-end gap-4 pt-1 pr-4">
        <Link className={`hover:underline ${inter.className}`} href={"/en"}>English</Link>
        <Link className={`hover:underline ${abhaya.className}`} href={"/si"}>සිංහල</Link>
      </div>

      <div className="xl:pt-3 pb-5 relative flex justify-center xl:justify-start">
        <div className="hidden sm:flex xl:hidden absolute left-0 top-5">
          <Image
            src="/icons/phone.svg"
            alt="phone icon"
            width={30}
            height={30}
            className="pr-2"
          />
          <h2>{homeData.telNo}</h2>
        </div>

        <div className="shrink-0 relative w-[108px] h-[40px] sm:w-[140px] sm:h-[52px] lg:w-[172px] lg:h-[64px] object-contain">
          <Link href={`/${lang}`} className="cursor-pointer">
            <Image
              alt="Sujatha's Anthurium Title Image, shows the brand logo"
              src={"/Sujathas-Anthurium.png"}
              fill
              sizes="(min-width: 640px) 140px, (min-width: 1024px) 172px, 108px"
            />
          </Link>
        </div>

        <div
          className="xl:hidden absolute right-10 top-5 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <Image
            alt="Expand Icon"
            src={"/icons/menu.svg"}
            width={28}
            height={28}
          />
        </div>
      </div>

      <div className="pl-10 xl:pl-0 py-2 pr-10">
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

      <div className="flex flex-col grow justify-start xl:justify-between">
        <div className="mt-7 text-center xl:text-start">
          {titles.map((ttl: string) => {
            return (
              <Link
                key={ttl}
                href={`/${lang}/shop#${ttl}`}
                className="cursor-pointer"
              >
                <h2
                  className={`text-black font-light ${
                    lang === Locale.en ? "text-2xl" : "text-3xl"
                  } mb-6 uppercase hover:text-txt-hover`}
                >
                  {ttl}
                </h2>
              </Link>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col">
          <div className="basis-32 shrink-1 text-center xl:text-start">
            {subTitles.map((ttl) => {
              return (
                <Link
                  key={ttl}
                  href={`/${lang}/#${ttl}`}
                  className="cursor-pointer"
                >
                  <h2
                    key={ttl}
                    className={`text-slate-600 font-semibold ${
                      lang === Locale.en ? "text-base" : "text-xl"
                    } mb-3 hover:text-txt-hover`}
                  >
                    {ttl}
                  </h2>
                </Link>
              );
            })}
          </div>

          <div className={`pt-5 pb-10 ${inter.className}`}>
            <div className="flex justify-center xl:justify-start pb-2">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width={24}
                height={24}
                className="pr-2 hidden 2xl:block"
              />
              <h2>{homeData.telNo}</h2>
            </div>

            <div>
              <a
                className="flex text-sm justify-center xl:justify-start pb-2 hover:text-txt-hover"
                href={`mailto:${homeData.email}`}
              >
                <Image
                  src="/icons/mail.svg"
                  alt="email icon"
                  width={24}
                  height={24}
                  className="pr-2  hidden 2xl:block"
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
