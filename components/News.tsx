import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAnglesRight,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

const newsCategories = ["Tin nổi bật", "Tin tức", "Tư vấn", "Phong thủy"]
const News = () => {
  const [newActive, setNewActive] = useState<number>(0)
  return (
    <div className="container mx-auto px-8 pt-2 pb-12">
      <div className="w-[60rem]">
        <div className="flex justify-between">
          <ul className="flex text-xl font-bold">
            {newsCategories.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer border-b-[3px] px-6 py-2 hover:border-red-500 hover:text-slate-200 ${
                  newActive === index
                    ? "border-red-500 text-slate-200"
                    : "border-slate-200"
                }`}
                onClick={() => setNewActive(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="flex-1 border-b-[3px] border-slate-200 px-4 text-right text-red-500">
            Xem thêm
          </button>
        </div>
        {/* main  */}
        <div className="flex min-h-[20rem] gap-4 py-4">
          <div className="w-[30rem]">
            <div className="relative h-[18rem] overflow-hidden rounded-lg">
              <Image src="/images/tieudiem.jpg" layout="fill" />
            </div>
            <div>
              <h1 className="py-4 text-xl font-bold text-slate-300">
                Tiêu điểm thị trường BĐS tháng 5/2022
              </h1>
              <span className="flex items-center gap-2 text-slate-400">
                <FontAwesomeIcon icon={faClockRotateLeft} className="h-4 w-4" />
                4 Tuần trước
              </span>
            </div>
          </div>
          <div className="flex-1">
            <a className="flex cursor-pointer items-center gap-2 border-b-[1px] border-slate-200/50 py-4 font-bold text-slate-200 hover:text-slate-400">
              <FontAwesomeIcon icon={faAnglesRight} className="h-4 w-4" />
              Tiêu điểm thị trường BĐS tháng 5/2022
            </a>
            <a className="flex cursor-pointer items-center gap-2 border-b-[1px] border-slate-200/50 py-4 text-slate-200 hover:text-slate-400">
              <FontAwesomeIcon icon={faAnglesRight} className="h-4 w-4" />
              Bội thu giải thưởng, Sàn Nam Long ghi mốc mới trên hành trình phát
              triển
            </a>
            <a className="flex cursor-pointer items-center gap-2 border-b-[1px] border-slate-200/50 py-4 text-slate-200 hover:text-slate-400">
              <FontAwesomeIcon icon={faAnglesRight} className="h-4 w-4" />
              Kinh nghiệm mua chung cư Hà Nội giá dưới 1 tỷ trong năm 2022
            </a>
            <a className="flex cursor-pointer items-center gap-2 border-b-[1px] border-slate-200/50 py-4 text-slate-200 hover:text-slate-400">
              <FontAwesomeIcon icon={faAnglesRight} className="h-4 w-4" />
              Điểm danh những điểm “nóng bỏng” của thị trường bất động sản 2021
            </a>
            <a className="flex cursor-pointer items-center gap-2 border-b-[1px] border-slate-200/50 py-4 text-slate-200 hover:text-slate-400">
              <FontAwesomeIcon icon={faAnglesRight} className="h-4 w-4" />
              Biến động mới nhất về giá bất động sản tại TP. Thủ Đức
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
