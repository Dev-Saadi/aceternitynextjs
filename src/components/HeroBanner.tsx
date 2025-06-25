"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

import banner1 from "@/assetimage/orbit-6.png";
import banner2 from "@/assetimage/orbit12.png";
import banner3 from "@/assetimage/orbit-10.png";
import banner4 from "@/assetimage/orbit-15.png";

import type { Swiper as SwiperType } from "swiper/types";

const Banner: React.FC = () => {
  const images = [banner1, banner2, banner3, banner4];
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div className="w-full flex justify-center mt-16">
      <div
        className="w-[90%] max-w-7xl aspect-[32/17] rounded-md overflow-hidden shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="#">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Banner ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
