import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useAppDispatch } from "../redux/hook"
import { setIsLoading } from "../redux/headerSlice"

const AccountInfo: React.FC<any> = ({ user }) => {
  // const { data: session } = useSession()
  const dispatch = useAppDispatch()
  const router = useRouter()
  console.log(user)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      dispatch(setIsLoading(true))
      const res = await axios.put(`/api/user/${user._id}/update`, {
        ...data,
      })
      console.log("cc")
      dispatch(setIsLoading(false))
      router.push("/account")
      toast.success("Cập Nhật Thông Tin Thành Công!")
    } catch {
      console.log("error")
    }
  }
  return (
    <div className="col-span-7 pb-10">
      <div>
        <h1 className="mb-4 bg-blue-800 py-2 px-4 font-bold uppercase text-slate-200">
          Thay Đổi Thông Tin Tài Khoản
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="font-sans">
          <div>
            <h2 className="border-b-4 border-blue-900 bg-blue-300 px-4 py-2 text-sm font-bold text-blue-800">
              Thông tin cá nhân
            </h2>
            <div className="min-h-[20rem] space-y-4 bg-slate-400 p-4 text-gray-900">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="username"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Họ và tên <span className="text-red-600">(*)</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-[15rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("username", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="subName"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Tên thường gọi
                </label>
                <input
                  defaultValue={user.subName}
                  className="w-[15rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("subName", {
                    // required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="birthday"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  defaultValue={user.birthday.split("T")[0]}
                  className="border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("birthday")}
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="gender"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Giới tính
                </label>
                <input
                  type="radio"
                  {...register("gender")}
                  value="Nam"
                  checked={user.gender === "Nam"}
                />
                <label htmlFor="" className="mr-4">
                  Nam
                </label>
                <input
                  type="radio"
                  {...register("gender")}
                  value="Nữ"
                  checked={user.gender === "Nữ"}
                />
                <label htmlFor="">Nữ</label>
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="address"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Địa chỉ
                </label>
                <div className="flex-1">
                  <input
                    defaultValue={user.address}
                    className="w-[18rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                    placeholder="VD: 48 Cao Thắng"
                    {...register("address")}
                  />

                  <div className="mt-4 flex w-full gap-3 text-xs">
                    <div className="flex flex-col gap-1">
                      <span>Tỉnh/Thành phố</span>
                      <select name="" id="" className="w-[10rem]"></select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>Quận/Huyện</span>
                      <select name="" id="" className="w-[10rem]"></select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>Phường/Xã</span>
                      <select name="" id="" className="w-[10rem]"></select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="border-b-4 border-blue-900 bg-blue-300 px-4 py-2 text-sm font-bold text-blue-800">
              Thông tin liên hệ
            </h2>
            <div className="min-h-[5rem] space-y-4 bg-slate-400 p-4 text-gray-900">
              <div className="flex items-center gap-2">
                <label htmlFor="tel" className="w-[7rem] text-sm text-gray-800">
                  Số điện thoại <span className="text-red-600">(*)</span>
                </label>
                <input
                  defaultValue={user.phoneNumber}
                  className="w-[15rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("tel", {
                    required: true,
                    pattern: /^[0-9]{10}/,
                  })}
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="email"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  Email <span className="text-red-600">(*)</span>
                </label>
                <input
                  defaultValue={user.email}
                  disabled
                  className="w-[15rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("email")}
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="cmnd"
                  className="w-[7rem] text-sm text-gray-800"
                >
                  CMND <span className="text-red-600">(*)</span>
                </label>
                <input
                  defaultValue={user.cccd}
                  className="w-[15rem] border-[1px] bg-slate-200 px-2 py-1 outline-none"
                  {...register("cccd")}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b-4 border-blue-900 bg-blue-300 px-4 py-2 text-sm font-bold text-blue-800">
              Avatar
            </h2>
            <div className="min-h-[5rem] space-y-4 bg-slate-400 p-4 text-gray-900">
              <div className="flex justify-center">
                <input
                  type="file"
                  className="cursor-pointer"
                  {...register("fileImage")}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mx-auto mt-4 block rounded-xl bg-pink-500 px-8 py-3 font-bold hover:bg-pink-600 hover:text-slate-200"
          >
            {" "}
            Cập Nhật{" "}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AccountInfo
