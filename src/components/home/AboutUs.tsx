import TitleCard from "../TitleCard";
import { roboto } from "../../app/fonts";
import homeData from '../../data/home-data.json';

function AboutUs() {
  return (
    <div className="py-24 px-20">
      <TitleCard title={homeData.aboutUsTitle} subTitle={homeData.aboutUsSubTitle} />

      <div className={`${roboto.className} leading-8 w-1/2 m-auto pt-10 text-lg text-center text-slate-700`}>
        {homeData.aboutUsDescription}
      </div>
    </div>
  )
}

export default AboutUs;
