import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import Header from "./Header"
import SignIn from "./SignIn"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faHeadphones,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons"
import { PropagateLoader } from "react-spinners"
import Loading from "./Loading"
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { useRouter } from "next/router"
import { setIsLoading } from "../redux/headerSlice"

const override = {
  display: "block",
  margin: "0 auto",
}

const DefaultLayout: React.FC<any> = ({ children }) => {
  const [visibleSignIn, setVisibleSignIn] = useState<boolean>(false)
  const loading = useAppSelector((state) => state.headerState.isLoading)
  const router = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    let oldPathname = router.asPath.split("?")[0]
    const handleRouterChangeStart = (url: any) => {
      if (oldPathname !== url.split("?")[0]) {
        oldPathname = url.split("?")[0]
        dispatch(setIsLoading(true))
      }
    }
    const handleRouterComplete = () => {
      dispatch(setIsLoading(false))
    }
    router.events.on("routeChangeStart", handleRouterChangeStart)
    router.events.on("routeChangeComplete", handleRouterComplete)

    return () => {
      router.events.off("routeChangeStart", handleRouterChangeStart)
      router.events.off("routeChangeComplete", handleRouterComplete)
    }
  }, [])
  return (
    <div className="min-h-screen bg-slate-700">
      <Head>
        <title>Hồ Tuấn - Bất Động Sản</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setVisibleSignIn={setVisibleSignIn} />
      <main className="">
        <div className="space-y-10">{children}</div>
      </main>

      <footer className="border-t pb-4">
        <div className="container mx-auto flex gap-8 p-6">
          <div className="w-[25rem]">
            <div className="relative h-[10rem]">
              <Image src={"/images/logo-black.svg"} layout="fill" />
            </div>
            <div className="text-slate-200">
              <h1 className="text-center font-bold">
                CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM
              </h1>
            </div>
          </div>
          <div className="flex-1 p-6 text-slate-200">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
                <div>
                  <p>Hotline</p>
                  <p className="font-bold">1900 1811</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUserDoctor} className="h-6 w-6" />
                <div>
                  <p>Hỗ trợ khách hàng</p>
                  <p className="font-bold">trogiup.batdongsan.com.vn</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faHeadphones} className="h-6 w-6" />
                <div>
                  <p>Chăm sóc khách hàng</p>
                  <p className="font-bold">hotro@batdongsan.com.vn</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-12">
              <ul className="space-y-2 text-slate-300">
                <li className="!mb-4 font-bold uppercase text-slate-200">
                  Hướng dẫn
                </li>
                <li>Báo giá & hỗ trợ</li>
                <li>Câu hỏi thường gặp</li>
                <li>Thông báo</li>
                <li>Liên hệ</li>
                <li>Sitemap</li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li className="!mb-4 font-bold uppercase text-slate-200">
                  Quy định
                </li>
                <li>Quy định đăng tin</li>
                <li>Quy chế hoạt động</li>
                <li>Điều khoản thỏa thuận</li>
                <li>Chính sách bảo mật</li>
                <li>Góp ý báo lỗi</li>
              </ul>
              <div>
                <h1 className="font-bold uppercase">Đăng ký nhận tin</h1>
                <div className="mt-4">
                  <div className="flex h-12 items-center gap-4 rounded-xl bg-slate-200 pr-2">
                    <input
                      type="text"
                      placeholder="Nhập email của bạn"
                      className="flex-1 bg-transparent px-4 text-slate-900 outline-none"
                    />
                    <button className="rounded-lg bg-red-500 px-4 py-2 font-bold text-slate-900">
                      Gửi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/30 pt-2 text-center text-slate-300">
          Copyright © 2007 - 2022 Batdongsan.com.vn
        </div>
      </footer>
      <ToastContainer />
      {visibleSignIn && <SignIn setVisibleSignIn={setVisibleSignIn} />}
      {loading && (
        <Loading>
          <PropagateLoader
            color={"#042E31"}
            loading={loading}
            cssOverride={override}
            size={30}
          />
        </Loading>
      )}
    </div>
  )
}

export default DefaultLayout
