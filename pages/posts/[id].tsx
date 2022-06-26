import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import DefaultLayout from "../../components/DefaultLayout"
import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShare,
  faTriangleExclamation,
  faHeart,
  faSquare,
  faBed,
  faScaleBalanced,
  faMoneyBillWave,
  faToilet,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../redux/hook"
import { setIsLoading } from "../../redux/headerSlice"
import { toast } from "react-toastify"

const Home: NextPage<any> = ({ realEstate, userPost }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>({})
  const dispatch = useAppDispatch()

  const handleBuyRequest = async () => {
    try {
      dispatch(setIsLoading(true))
      const res = await axios.post(`/api/buy-request/${realEstate._id}`)
      console.log("cc")
      dispatch(setIsLoading(false))
      toast.success("Yêu Cầu Mua Đất Thành Công! Chờ Xét Duyệt!!!")
    } catch {
      toast.error("Bạn Đã Gửi Yêu Cầu Này Rồi!!!")
      dispatch(setIsLoading(false))
    }
  }
  return (
    <DefaultLayout>
      <div className="container sticky top-[96px] z-[99] mx-auto bg-slate-700 px-20 py-2 font-bold text-slate-200 ">
        <div className=" flex gap-2">
          <Link href={"/"}>
            <a className="hover:text-red-400">Trang Chủ </a>
          </Link>
          <span>/</span>
          <a className="hover:text-red-400">Bài Đăng </a>
          <span>/</span>
          <a className="text-red-400">{realEstate.title} </a>
        </div>
      </div>
      <div className="container mx-auto !mt-4 min-h-screen px-20 pb-20">
        <div className="grid grid-cols-10 space-x-6">
          <div className="col-span-7 space-y-4">
            <div className="space-y-2">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                //   thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper"
              >
                {realEstate.images.map((image: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={`h-[300px] bg-cover bg-center bg-no-repeat transition-all duration-500 sm:h-[350px] lg:h-[400px] xl:h-[500px]`}
                        style={{
                          backgroundImage: `url("/images/real-estate/${image}")`,
                        }}
                      ></div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbSwiper"
              >
                {realEstate.images.map((image: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="relative h-[60px] cursor-pointer sm:h-[80px] lg:h-[100px]"
                        style={{
                          backgroundImage: `url("/images/real-estate/${image}")`,
                        }}
                      ></div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="space-y-2">
              <h1 className="mt-10 text-2xl font-bold text-slate-200">
                {realEstate.title}
              </h1>
              <p className="text-slate-300">{realEstate.subTitle}</p>
              <div className="flex items-center justify-between border-y border-slate-400/50 p-4">
                <div className="flex items-center gap-20">
                  <div className="flex flex-col">
                    <span className="text-slate-400">Mức giá</span>
                    <span className="text-xl font-bold text-slate-200">
                      {realEstate.price} tỷ
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400">Diện tích</span>
                    <span className="text-xl font-bold text-slate-200">
                      {realEstate.area} m²
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400">Phòng Ngủ</span>
                    <span className="text-xl font-bold text-slate-200">
                      {realEstate.bedRoom} Phòng
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-slate-200">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="h-7 w-7 cursor-pointer hover:text-slate-400"
                  />
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="h-7 w-7 cursor-pointer hover:text-slate-400"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="h-7 w-7 cursor-pointer hover:text-slate-400"
                  />
                </div>
              </div>
              <div>
                <h2 className="py-2 text-xl font-bold text-slate-200">
                  Thông tin mô tả
                </h2>
                <div className="text-slate-400">
                  {realEstate.desc
                    .split(/\r?\n/)
                    .map((item: any, index: any) => (
                      <p key={index}>{item}</p>
                    ))}
                </div>
              </div>
              <div>
                <h1 className="mt-8 py-2 text-xl font-bold text-slate-200">
                  Đặc điểm bất động sản
                </h1>
                <p className="text-slate-300">
                  {" "}
                  Loại tin đăng: Bán căn hộ chung cư
                </p>
                <div className="grid grid-cols-2 gap-4 py-8 text-slate-200">
                  <div className="border-t border-slate-400/50">
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon icon={faSquare} className="h-6 w-6" />
                        Diện tích
                      </span>
                      <span>{realEstate.area} m²</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon icon={faBed} className="h-6 w-6" />
                        Số phòng ngủ
                      </span>
                      <span>{realEstate.bedRoom}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon
                          icon={faScaleBalanced}
                          className="h-6 w-6"
                        />
                        Pháp lý
                      </span>
                      <span>{realEstate.juridical}</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-400/50">
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon
                          icon={faMoneyBillWave}
                          className="h-6 w-6"
                        />
                        Mức giá
                      </span>
                      <span className="font-bold">{realEstate.price} tỷ</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon icon={faToilet} className="h-6 w-6" />
                        Số phòng Toilet
                      </span>
                      <span>{realEstate.toiletRoom}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-400/50 p-4">
                      <span className="flex gap-4 font-bold">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="h-6 w-6"
                        />
                        Số tầng
                      </span>
                      <span>{realEstate.floors}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-20 text-slate-200">
                <div>
                  <p className="text-slate-400">Ngày đăng</p>
                  <p>
                    {" "}
                    {realEstate.startDay
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Ngày hết hạn</p>
                  <p>
                    {realEstate.endDay
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Loại tin</p>
                  <p className="font-bold">Tin VIP đặc biệt</p>
                </div>
                <div>
                  <p className="text-slate-400">Mã tin</p>
                  <p className="font-bold">{realEstate._id}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[140px] col-span-3 h-fit rounded-xl border border-slate-600/50 bg-slate-600 p-4 py-8 shadow-xl">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image src={`${userPost.image}`} layout="fill" />
                </div>
                <p className="text-sm text-slate-300">Được đăng bởi</p>
                <p className="text-xl font-bold text-slate-100">
                  {userPost.name}
                </p>
                <a className="cursor-pointer text-slate-200 hover:text-red-400">
                  Xem thêm tin khác
                </a>
              </div>
              <div className="w-full space-y-4 px-4">
                <button className="block w-full rounded-xl border bg-slate-600 py-4 font-bold text-slate-200 shadow-xl transition-all hover:scale-110">
                  Gửi Email
                </button>
                <button className="block w-full rounded-xl border bg-slate-600 py-4 font-bold text-slate-200 shadow-xl transition-all hover:scale-110">
                  Yêu Cầu Liên Hệ Lại
                </button>
                <button
                  className="block w-full rounded-xl bg-red-700 py-4 font-bold text-slate-200 shadow-xl transition-all hover:scale-110"
                  onClick={handleBuyRequest}
                >
                  Yêu Cầu Mua Đất
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: any) {
  const { data: realEstate } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/real-estate/${context.query.id}`
  )
  const { data: userPost } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/user/${realEstate.userPost}`
  )
  return {
    props: {
      realEstate,
      userPost,
    },
  }
}
export default Home
