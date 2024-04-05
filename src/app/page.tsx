import Image from "next/image";
import CustomCarousel from "./components/carousel/CustomCarousel";
import Shop from "./components/shop/Shop";

const images = [
  {
    title: "Anthurium",
    subTitle: "Harness love",
    path: "/images/slider/anthurium-1.jpg",
    position: "top-right",
  },
  {
    title: "Garden",
    subTitle: "Make it yours",
    path: "/images/slider/anthurium-2.jpeg",
    position: "top-left",
  },
  {
    title: "Plants",
    subTitle: "Bloom with expert care",
    path: "/images/slider/anthurium-3.jpg",
    position: "bottom-right",
  },
];

export default function Home() {
  const getTitlePosition = (position: string) => {
    switch (position) {
      case "top-right": {
        return {
          right: "200px",
          top: "40px",
        };
      }
      case "top-left": {
        return {
          left: "100px",
          top: "60px",
        };
      }
      case "bottom-left": {
        return {
          left: "60px",
          bottom: '15%',
        };
      }
      case "bottom-right": {
        return {
          right: "200px",
          bottom: '15%',
        };
      }
    }
  };

  return (
    <main className="bg-bg-default h-screen">
      <CustomCarousel>
        {images.map((img) => (
          <div key={img.title} className="h-full w-full relative">
            <Image
              src={img.path}
              alt={img.title}
              fill={true}
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                color: "white",
                ...getTitlePosition(img.position),
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "60px",
                }}
              >
                {img.title}
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  paddingLeft: "8px",
                  fontStyle: "italic",
                }}
              >
                {img.subTitle}
              </div>
            </div>
          </div>
        ))}
      </CustomCarousel>

      <Shop />
    </main>
  );
}
