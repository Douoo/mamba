"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "./Carousel.module.css";
import Image from "next/image";

function CarouselSlider() {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide>
          <Image
            src="/images/character.png"
            alt="character"
            width={440}
            height={512}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/character.png"
            alt="character"
            width={440}
            height={512}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/character.png"
            alt="character"
            width={440}
            height={512}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/character.png"
            alt="character"
            width={440}
            height={512}
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
        <span className="heading-md clr-primary | uppercase mt-6 block">
          Mamba Token
        </span>
        <div className="flex justify-center gap-4 my-10">
          <SlidePrev />
          <SlideNext />
        </div>
      </Swiper>
    </>
  );
}

export default CarouselSlider;

export function SlideNext() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <span className={`${styles.swipeBtn} swiper-button-next`}>
        <Image src="/icons/arrow-right.svg" width={20} height={20} />
      </span>
    </button>
  );
}

export function SlidePrev() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      {" "}
      <span className={`${styles.swipeBtn} swiper-button-prev`}>
        <Image src="/icons/arrow-left.svg" width={20} height={20} />
      </span>
    </button>
  );
}
