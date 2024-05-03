import {
  Inter,
  Prata,
  Roboto,
  Abhaya_Libre,
  Noto_Sans_Sinhala,
  Noto_Serif_Sinhala,
} from "next/font/google";
import { Locale } from "../types/common";

// english
export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
export const prata = Prata({ subsets: ["latin"], weight: ["400"] });

// sinhala
export const abhaya = Abhaya_Libre({
  subsets: ["sinhala"],
  weight: ["400", "500", "700"],
});
export const noto_sans = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "700"],
});
export const noto_serif = Noto_Serif_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "700"],
});

const primaryFont = {
  en: inter,
  si: abhaya,
  ta: inter,
};

const secondaryFont = {
  en: roboto,
  si: noto_sans,
  ta: roboto,
};

const tertiaryFont = {
  en: prata,
  si: noto_serif,
  ta: prata,
};

export const getPrimaryFont = (lang: Locale) => primaryFont[lang];
export const getSecondaryFont = (lang: Locale) => secondaryFont[lang];
export const getTertiaryFont = (lang: Locale) => tertiaryFont[lang];
