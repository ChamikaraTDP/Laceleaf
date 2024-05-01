import 'server-only'
import { Locale } from './types/common';
 
const dictionaries = {
  [Locale.en]: () => import('./dictionaries/en.json').then((module) => module.default),
  [Locale.si]: () => import('./dictionaries/si.json').then((module) => module.default),
  [Locale.ta]: () => import('./dictionaries/si.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]();


const homeData = {
  [Locale.en]: () => import('./data/home-data.en.json').then((module) => module.default),
  [Locale.si]: () => import('./data/home-data.si.json').then((module) => module.default),
  [Locale.ta]: () => import('./data/home-data.ta.json').then((module) => module.default),
}

export const getHomeData = async (locale: Locale) => {
  return homeData[locale]();
};
