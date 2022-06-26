import React, { useState } from "react"
import { signIn } from "next-auth/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faUser, faLock } from "@fortawesome/free-solid-svg-icons"

const SignIn: React.FC<any> = ({ setVisibleSignIn }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="fixed inset-0 z-[199] flex items-center justify-center bg-black/40">
      <div className="min-h-[30rem] w-[30rem] rounded-2xl bg-slate-100 shadow-2xl">
        <div className="p-8 px-10">
          <h1 className="flex items-center justify-between text-xl font-bold text-slate-900">
            {" "}
            Đăng Nhập
            <FontAwesomeIcon
              icon={faXmark}
              className="h-8 w-8 cursor-pointer hover:text-gray-500"
              onClick={() => setVisibleSignIn(false)}
            />
          </h1>
          <div className="mt-10 space-y-4 px-8">
            <div className="flex items-center gap-4 rounded-2xl border-2 border-slate-900 px-4">
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 cursor-pointer text-slate-700"
                onClick={() => setVisibleSignIn(false)}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tên đăng nhập/Email"
                className="h-14 w-full bg-transparent pr-6 outline-none"
              />
            </div>
            <div className="flex items-center gap-4 rounded-2xl border-2 border-slate-900 px-4">
              <FontAwesomeIcon
                icon={faLock}
                className="h-5 w-5 cursor-pointer text-slate-700"
                onClick={() => setVisibleSignIn(false)}
              />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                className="pr-3-6 h-14 w-full bg-transparent outline-none"
              />
            </div>
            <div className="!mt-8 rounded-2xl bg-red-600 py-4 text-center font-bold text-slate-100">
              <button> Đăng Nhập</button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Nhớ tài khoản
                </label>
              </div>
              <button className="text-red-600">Quên mật khẩu?</button>
            </div>

            <div className="flex items-center">
              <span className="flex-1 border-b-[1px] border-slate-700/40"></span>
              <small className="px-1 leading-none text-gray-500">Hoặc</small>
              <span className="flex-1 border-b-[1px] border-slate-700/40"></span>
            </div>

            <div className="flex justify-between">
              <button
                className="rounded-xl border-[1px] border-slate-900/50 px-8 py-3 font-bold"
                onClick={() =>
                  signIn("facebook", undefined, { prompt: "login" })
                }
              >
                Facebook
              </button>
              <button
                className="rounded-xl border-[1px] border-slate-900/50 px-8 py-3 font-bold"
                onClick={async () => {
                  const res = await signIn("google")
                  if (res?.["error"] === "Email existed!") console.log("cc")
                }}
              >
                Google
              </button>
            </div>

            <div className="!mt-10 text-center text-gray-600">
              Chưa có thành viên? <span className="text-red-500">Đăng kí</span>{" "}
              tại đây
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
