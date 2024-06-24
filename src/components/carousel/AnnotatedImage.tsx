import Image from "next/image";

import "./custom.slider.css";

type ImageMetaData = {
  title: string;
  altText: string;
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
        alt={imgMeta.altText}
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div
      className={`absolute text-white left-0 top-0 h-full w-full flex items-center justify-center flex-col sm:inline sm:h-auto sm:w-auto sm:${imgMeta.position}`} >
        <div
          className="text-3xl sm:text-5xl font-bold leading-[60px]"
        >
          {imgMeta.title}
        </div>
        <div
          className="text-lg sm:text-2xl font-light pl-2 italic"
        >
          {imgMeta.subTitle}
        </div>
      </div>
    </div>
  );
}
