import Image from "next/image";
import CustomCarousel from "./CustomCarousel";
import { ItemImage } from "../../types/common";

type ImageCarouselProps = {
  images: ItemImage[];
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
      thumbnails={images.map((img) => {
        return (
          <Image
            key={img.title}
            src={img.path}
            alt={img.title}
            fill={true}
            style={{ objectFit: "cover" }}
            quality={40}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 256px, 128px"
          />
        );
      })}
    >
      {images.map((img) => (
        <div key={img.path} className="h-full w-full relative">
          <Image
            src={img.path}
            alt={img.title}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </CustomCarousel>
  );
}
