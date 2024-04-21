import AnnotatedImage from "./AnnotatedImage";
import CustomCarousel from "./CustomCarousel";
import homeData from '../../data/slider-images.json';

export default function AnnotatedImageCarousel({ autoSlide = true }) {
  return (
    <CustomCarousel autoSlide={autoSlide}>
      {homeData.sliderImages.map((img) => (
        <AnnotatedImage key={img.path} imgMeta={img} />
      ))}
    </CustomCarousel>
  );
}
