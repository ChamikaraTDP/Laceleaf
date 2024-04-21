import Shop from "../components/home/Shop";
import AboutUs from "../components/home/AboutUs";
import Faq from "../components/home/Faq";
import ContactUs from "../components/home/ContactUs";
import Footer from "../components/home/Footer";
import CustomCarousel from "../components/carousel/CustomCarousel";
import AnnotatedImage from "../components/carousel/AnnotatedImage";
import homeData from "../data/home-data.json";

export default function Home() {
  return (
    <main className="bg-bg-default h-screen">
      <div className="h-screen w-full">
        <CustomCarousel autoSlide={true}>
          {homeData.sliderImages.map((img) => (
            <AnnotatedImage key={img.path} imgMeta={img} />
          ))}
        </CustomCarousel>
      </div>

      <Shop />

      <AboutUs />

      <Faq />

      <ContactUs />

      <Footer />
    </main>
  );
}
