import Shop from "../components/shop/Shop";
import AboutUs from "../components/about/AboutUs";
import Faq from "../components/faq/Faq";
import ContactUs from "../components/contact/ContactUs";
import Footer from "../components/footer/Footer";
import AnnotatedImageCarousel from "../components/carousel/AnnotatedImageCarousel";

export default function Home() {
  return (
    <main className="bg-bg-default h-screen">
      <div className="h-screen w-full">
        <AnnotatedImageCarousel />
      </div>

      <Shop />

      <AboutUs />

      <Faq />

      <ContactUs />

      <Footer />
    </main>
  );
}
