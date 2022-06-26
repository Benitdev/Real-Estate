import React from "react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

import Tippy from "@tippyjs/react/headless"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faArrowRightFromBracket,
  faLock,
  faTable,
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const menuItems = [
  "Nhà đất bán",
  "Nhà đất cho thuê",
  "Dự án",
  "Tin tức",
  "Wiki BĐS",
]

const menuAccounts = [
  {
    icon: <FontAwesomeIcon icon={faTable} className="h-5 w-5" />,
    title: "Quản lý tin đăng",
    link: "/account/buy-request",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} className="h-5 w-5" />,
    title: "Thông tin cá nhân",
    link: "/account",
  },
  {
    icon: <FontAwesomeIcon icon={faLock} className="h-5 w-5" />,
    title: "Thay đổi mật khẩu",
    link: "/account",
  },
]
const Header: React.FC<any> = ({ setVisibleSignIn }) => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <header className="sticky top-0 z-[999] bg-slate-900 text-slate-200 shadow-lg">
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        {/* left side of the header */}
        <div className="flex h-full items-center">
          {/* logo  */}
          <Link href={"/"}>
            <a className="relative h-3/5 w-[16rem]">
              <Image
                src={"/images/logo.svg"}
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
          {/* menu  */}
          <ul className="flex gap-4 font-bold capitalize">
            {menuItems.map((item, index) => (
              <li className="group cursor-pointer" key={index}>
                <p className="px-2">{item}</p>
                <span className="block h-[3px] w-0 rounded-lg bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
        {/* right side of the header  */}
        <div className="flex items-center text-sm font-bold">
          {session && (
            <Tippy
              placement="bottom"
              interactive
              render={(attrs) => (
                <div
                  className="w-[15em] rounded-xl bg-slate-700 text-slate-200 shadow-2xl"
                  tabIndex={-1}
                  {...attrs}
                >
                  <ul className="space-y-3 p-4 px-6">
                    {menuAccounts.map((item, index) => (
                      <li key={index} className="hover:text-slate-900">
                        <Link href={item.link}>
                          <a className="flex items-center gap-2">
                            {item.icon}
                            <p>{item.title}</p>
                          </a>
                        </Link>
                      </li>
                    ))}
                    <li
                      onClick={() => signOut()}
                      className="flex cursor-pointer items-center gap-2 hover:text-slate-900"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="h-5 w-5"
                      />
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              )}
            >
              <div className="mr-4 flex cursor-pointer items-center rounded-xl border-[1px] border-slate-400/30 pl-1 hover:border-2 hover:border-slate-200/50">
                <div className="relative h-7 w-7 overflow-hidden rounded-md">
                  <Image
                    src={`${session?.user?.image}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="px-4 py-2 text-red-500">
                  {" "}
                  {session?.user?.name}
                </span>
              </div>
            </Tippy>
          )}
          {!session && (
            <div className="flex items-center">
              <button
                className="rounded-xl px-4 py-2 hover:bg-slate-400/30"
                onClick={() => setVisibleSignIn(true)}
              >
                {" "}
                Đăng Nhập{" "}
              </button>
              <hr className="h-6 w-[1px] bg-slate-200" />
              <button className="rounded-xl px-4 py-2 hover:bg-slate-400/30">
                {" "}
                Đăng Ký{" "}
              </button>
            </div>
          )}
          <button className="ml-2 rounded-xl border-[1px] border-slate-400/30 bg-slate-600/20 px-4 py-3">
            Đăng Tin
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
