"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const animation = { duration: 30000, easing: (t: number) => t };

export default function IntroGallery() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 500px)": {
        slides: {
          perView: 2,
        },
      },
    },
  });

  const galleryItems = new Array(8).fill("/images/jpg/gallery/img");

  //   return (
  //     <div className="w-full grid grid-cols-4 mt-32">
  //       {galleryItems.map((item, index) => (
  //         <Image
  //           key={index}
  //           src={`${item}${index + 1}.jpg`}
  //           alt="img"
  //           width={0}
  //           height={0}
  //           sizes="100vw"
  //           style={{ width: "100%", height: "auto" }}
  //         />
  //       ))}
  //     </div>
  //   );
  return (
    <div ref={sliderRef} className="keen-slider mt-32">
      {galleryItems.map((item, index) =>
        <div
          key={index}
          className="relative">
          <Image
            className="keen-slider__slide number-slide6"
            key={index}
            src={`${item}${index + 1}.jpg`}
            alt="img"
            width={900}
            height={0}
          />
        </div>
      )}
    </div>
  );
}
