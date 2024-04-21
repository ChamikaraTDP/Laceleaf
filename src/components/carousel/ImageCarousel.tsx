import Image from "next/image";
import CustomCarousel from "./CustomCarousel";


type ImageCarouselProps = {
  images: { title: string; path: string }[];
  autoSlide: boolean;
  showLinkDots: boolean;
  showThumbnail: boolean;
};

export default function ImageCarousel({
  images,
  autoSlide = true,
  showLinkDots = true,
  showThumbnail = true,
}: ImageCarouselProps) {
  return (
    <CustomCarousel
      showThumbnail={showThumbnail}
      autoSlide={autoSlide}
      showLinkDots={showLinkDots}
    >
      {images.map((img) => (
        <div key={img.path} className="h-full w-full relative">
          <Image
            src={img.path}
            alt={img.title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </CustomCarousel>
  );
}
