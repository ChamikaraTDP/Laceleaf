import Image from "next/image";

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
        bottom: "15%",
      };
    }
    case "bottom-right": {
      return {
        right: "200px",
        bottom: "15%",
      };
    }
  }
};

type ImageMetaData = {
  title: string;
  subTitle: string;
  path: string;
  position: string;
};

type AnnotatedImageProps = {
  imgMeta: ImageMetaData;
};

export default function AnnotatedImage({ imgMeta }: AnnotatedImageProps) {
  return (
    <div className="h-full w-full relative">
      <Image
        src={imgMeta.path}
        alt={imgMeta.title}
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          color: "white",
          ...getTitlePosition(imgMeta.position),
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          {imgMeta.title}
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 300,
            paddingLeft: "8px",
            fontStyle: "italic",
          }}
        >
          {imgMeta.subTitle}
        </div>
      </div>
    </div>
  );
}
