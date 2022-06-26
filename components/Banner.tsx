import React from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"

import Search from "./Search"

import "swiper/css"
const Banner = () => {
  console.log("cc")
  return (
    <div className="relative">
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <div className="relative h-[24rem] before:absolute before:inset-0 before:z-10 before:bg-black/30">
            <Image
              src={"/images/banner/banner-1.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Search />
    </div>
  )
}

export default Banner
