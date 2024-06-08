'use server';

import { getTertiaryFont } from "../app/fonts";
import { Locale } from "../types/common";

type TitleCardProps = {
  title: string;
  subTitle: string;
  lang: Locale;
}

function TitleCard({ title, subTitle, lang }: TitleCardProps) {
  const tertiaryFont = getTertiaryFont(lang);

  return (
    <div className="flex">
      <div id={title} className={`${tertiaryFont.className} text-2xl sm:text-4xl`}>{title}</div>
      <div className={`pl-2 hidden sm:block text-xl font-extralight italic translate-y-4`}>
        {subTitle}
      </div>
    </div>
  );
}

export default TitleCard;
