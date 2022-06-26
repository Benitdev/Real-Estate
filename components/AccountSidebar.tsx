import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"

const AccountSidebar = () => {
  const { data: session } = useSession()
  return (
    <div className="col-span-3">
      <div>
        <h1 className="bg-blue-800 py-2 px-4 font-bold uppercase text-slate-200">
          Trang Cá Nhân
        </h1>
        <div className="min-h-[20rem] bg-slate-500">
          <div className="space-y-4 px-6 py-10">
            <div className="relative mx-auto h-[10rem] w-[10rem] overflow-hidden rounded-full">
              <Image
                src={`${session?.user?.image}`}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="text-center text-xl font-bold text-sky-200">
              <h1>{session?.user?.name}</h1>
            </div>
            <div className="border-[1px]  border-dashed  bg-slate-600 px-4 py-2 text-right text-sm text-slate-200">
              <p>
                Tài khoản tin rao: <span className="font-bold">0</span>
              </p>
              <p>
                Tài khoản ngoài tin rao:{" "}
                <span className="font-bold">1.000</span>
              </p>
              <p>
                Tài khoản KM1: <span className="font-bold">40.000</span>
              </p>
              <p>
                Tài khoản KM2: <span className="font-bold">0</span>
              </p>
            </div>
            <div>
              <button className="mx-auto block rounded-xl bg-blue-600 px-8 py-2 font-bold text-slate-100 shadow-xl">
                Nạp Tiền
              </button>
            </div>
          </div>
          <div>
            <h2 className="bg-slate-600 px-4 py-2 font-bold text-slate-200">
              Quản lý thông tin cá nhân
            </h2>
            <ul className="px-8 py-3 text-gray-900">
              <li className="font-bold text-red-400">
                Thay đổi thông tin cá nhân
              </li>
              <li>Thay đổi mật khẩu</li>
            </ul>
          </div>
          <div>
            <h2 className="bg-slate-600 px-4 py-2 font-bold text-slate-200">
              Quản lý tin đăng
            </h2>
            <ul className="px-8 py-3 text-gray-900">
              <li>Đăng mới</li>
              <li>Danh sách tin</li>
              <li>Tin nháp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSidebar
