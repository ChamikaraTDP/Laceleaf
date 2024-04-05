"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import "./custom.slider.css";

function CustomCarousel({ children }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);
  const [slideDone, setSlideDone] = useState(true);

  useEffect(() => {
    if (slideDone) {
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
    }
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
    <div className="container__slider">
      {children.map((item: any, index: number) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item: any, index: number) => {
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

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
      >
        <Image
          src="icons/next.svg"
          alt="next icon"
          width={20}
          height={24}
          className="h-6"
        />
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <Image
          src="icons/previous.svg"
          alt="previous icon"
          width={20}
          height={24}
          className="h-6"
        />
      </button>
    </div>
  );
}

export default CustomCarousel;
