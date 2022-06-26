import Image from "next/image"
import React from "react"
import TimeAgo from "timeago-react"
import * as timeago from "timeago.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import vi from "timeago.js/lib/lang/vi"
import Link from "next/link"
timeago.register("vi", vi)

const ForYou: React.FC<any> = ({ realEstates }) => {
  return (
    <div className="bg-slate-500 pb-10 pt-4">
      <div className="container mx-auto p-8">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold capitalize tracking-wider text-slate-200">
            bất động sản dành cho bạn
          </h1>
          <div className="flex space-x-4 text-slate-300">
            <button className="hover:text-slate-100">
              Tin nhà đất bán mới nhât
            </button>
            <span className="h-full w-[1px] bg-slate-300"></span>
            <button className="hover:text-slate-100">
              Tin nhà đất cho thuê mới nhất
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          {realEstates.map((item: any) => (
            <Link href={`/posts/${item._id}`} key={item._id}>
              <a className="flex h-[22rem] cursor-pointer flex-col overflow-hidden rounded-xl shadow-xl hover:shadow-2xl">
                <div className="relative h-[10rem]">
                  <Image
                    src={`/images/real-estate/${item.images[0]}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1 space-y-1 bg-slate-600 p-4">
                  <h1 className="overflow-text text-sm font-bold text-pink-400">
                    {item.title}
                  </h1>
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <span>{item.price} tỷ</span>
                    <span>·</span>
                    <span>{item.area} m²</span>
                  </div>
                  <div className="truncate text-slate-400">{item.subTitle}</div>
                  <div className="!mt-4 flex items-center justify-between">
                    <TimeAgo
                      datetime={item.startDay}
                      locale="vi"
                      className="text-slate-300"
                    />
                    <button className="rounded-lg border-[1px] p-3  text-slate-300 hover:bg-slate-300 hover:text-slate-800">
                      <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="rounded-xl bg-slate-800 px-10 py-4 font-bold text-slate-200 shadow-xl">
            {" "}
            Mở rộng{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForYou
