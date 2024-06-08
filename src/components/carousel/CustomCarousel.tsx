"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import "./custom.slider.css";

type CustomCarouselProps = {
  children: any[];
  autoSlide?: boolean;
  showLinkDots?: boolean;
  showThumbnail?: boolean;
  thumbnails?: any[];
};

function CustomCarousel({
  children,
  autoSlide = true,
  showLinkDots = true,
  showThumbnail = false,
  thumbnails,
}: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);
  const [slideDone, setSlideDone] = useState(true);

  useEffect(() => {
    if (slideDone && autoSlide) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 10_000)
      );
    }

    return () => {
      if (timeID) {
        clearTimeout(timeID);
      }
    };
  }, [slideDone]);

  const slideNext = () => {
    const nextIndex = (activeIndex + 1) % children.length;
    setActiveIndex(nextIndex);
  };

  const goToNext = () => {
    setSlideDone(false);
    slideNext();

    autoPlayReStart();
  };

  const slidePrev = () => {
    setSlideDone(false);
    const prevIndex = (activeIndex - 1 + children.length) % children.length;
    setActiveIndex(prevIndex);

    autoPlayReStart();
  };

  const autoPlayReStart = () => {
    if (timeID) clearTimeout(timeID);

    setTimeout(() => {
      setSlideDone(true);
    }, 0);
  };

  return (
    <div className="slider_root">
      <div
        className={
          showThumbnail
            ? "container__slider slider-with-thumbnail"
            : "container__slider"
        }
      >
        {children.map((item: any, index: number) => {
          return (
            <div
              className={
                "slider__item slider__item-active-" + (activeIndex + 1)
              }
              key={index}
            >
              {item}
            </div>
          );
        })}

        {showLinkDots && (
          <div className="container__slider__links">
            {children.map((_item: any, index: number) => {
              return (
                <button
                  key={index}
                  className={
                    activeIndex === index
                      ? "container__slider__links-small container__slider__links-small-active"
                      : "container__slider__links-small"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                ></button>
              );
            })}
          </div>
        )}

        <button
          className="slider__btn-next sm:slider__btn-next"
          onClick={(e) => {
            e.preventDefault();
            goToNext();
          }}
        >
          <Image
            src="/icons/next.svg"
            alt="next icon"
            width={20}
            height={24}
            className="h-6 "
          />
        </button>

        <button
          className="slider__btn-prev sm:slider__btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          <Image
            src="/icons/previous.svg"
            alt="previous icon"
            width={20}
            height={24}
            className="h-6"
          />
        </button>
      </div>

      {showThumbnail && thumbnails && (
        <div className="container_thumbnail">
          <div className="px-4 w-full text-nowrap text-center overflow-auto ">
              {thumbnails.map((item: any, index: number) => {
                return (
                  <div
                    className={`inline-block  w-[128px] h-[128px] relative overflow-hidden border-4 cursor-pointer mr-4 ${
                      activeIndex === index
                        ? "border-focus-primary"
                        : "border-transparent"
                    }`}
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomCarousel;
