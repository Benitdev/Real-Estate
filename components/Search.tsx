import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowsRotate,
  faMosque,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons"

const searchType = ["Nhà đất bán", "Nhà đất cho thuê", "Dự án"]
const Search = () => {
  const [searchTypeActive, setSearchTypeActive] = useState<number>(0)
  return (
    <div className="absolute top-[10%] left-1/2 z-[100] h-[10rem] w-[50rem] -translate-x-1/2">
      <div>
        <div className="flex gap-4">
          {searchType.map((item, index) => (
            <button
              className={`rounded-t-xl px-6 py-2 font-bold ${
                searchTypeActive === index
                  ? "bg-black/70 text-slate-200"
                  : "bg-slate-400/40 text-slate-900"
              }`}
              onClick={() => setSearchTypeActive(index)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="h-[9rem] rounded-b-xl rounded-tr-xl bg-black/70 p-6">
          <div className="flex h-[3rem] items-center rounded-xl bg-slate-100 px-3">
            <div className="flex h-full items-center gap-2 border-r-[1px] border-slate-700/20 pl-2 pr-4">
              <FontAwesomeIcon icon={faMosque} className="h-4 w-4" />
              <span>Loại nhà đất</span>
              <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" />
            </div>
            <div className="flex-1 px-4">
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="VD: Vinhome Central Park"
              />
            </div>
            <button className="rounded-xl bg-red-600 px-3 py-2 text-sm font-bold text-slate-100">
              {" "}
              Tìm kiếm
            </button>
          </div>
          <div className="mt-6">
            <div className="flex gap-2">
              <button className="flex flex-1 items-center justify-between rounded-lg border-[1px] border-white/70 px-3 py-1 text-slate-200">
                Trên toàn quốc
                <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" />
              </button>
              <button className="flex flex-1 items-center justify-between rounded-lg border-[1px] border-white/70 px-3 py-1 text-slate-200">
                Mức giá
                <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" />
              </button>
              <button className="flex flex-1 items-center justify-between rounded-lg border-[1px] border-white/70 px-3 py-1 text-slate-200">
                Diện tích
                <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" />
              </button>
              <button className="flex flex-1 items-center justify-between rounded-lg border-[1px] border-white/70 px-3 py-1 text-slate-200">
                Lọc thêm
                <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" />
              </button>
              <button className="ml-2 rounded-md p-2 hover:bg-black/70">
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  className="h-4 w-4 text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
