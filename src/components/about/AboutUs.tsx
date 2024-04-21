import TitleCard from "../TitleCard";
import { roboto } from "../../app/fonts";

function AboutUs() {
  return (
    <div className="py-24 px-20">
      <TitleCard title="About Us" subTitle="Get to know us" />

      <div className={`${roboto.className} leading-8 w-1/2 m-auto pt-10 text-lg text-center text-slate-700`}>
        We aim to combine a beautiful to look at, easy-to-use and flexible flower delivery service with the spark and magic that only the most passionate and skilled local florists can bring to a bouquet. We handpick every florist that we work with to ensure they share our values and our commitment to providing amazing online flower delivery experiences. 
        <br/>We’re truly ambitious in our aims to build a global community of flower lovers, florists, and wholesale flowers, spreading floral joy is what we’re all about! We try to give our community as many opportunities to send flowers with the majority of our florists offering same day flower delivery, perfect for those last-minute gifts.
      </div>
    </div>
  )
}

export default AboutUs;
