import Link from "next/link"
import React from "react"

const AccountBuyRequest: React.FC<any> = ({ buyRequests }) => {
  console.log(buyRequests)
  return (
    <div className="col-span-7 pb-10">
      <div>
        <h1 className="mb-4 bg-blue-800 py-2 px-4 font-bold uppercase text-slate-200">
          Danh sách bất động sản yêu cầu mua
        </h1>
        <div className="pb-4">
          <div className="mb-4 flex justify-between bg-slate-400 font-bold text-slate-200">
            <span className="flex-1 px-2">Mã yêu cầu</span>
            <span className="flex-1 px-2">Mã BĐS</span>
            <span className="mr-10 px-2">Trạng thái</span>
            <span className=" px-2">Ngày tạo</span>
          </div>
          <div className="space-y-2">
            {buyRequests.map((item: any) => (
              <Link href={`/posts/${item.realEstate}`}>
                <a className="flex gap-4 text-slate-300" key={item._id}>
                  <span className="flex-1">{item._id}</span>
                  <span className="flex-1">{item.realEstate}</span>
                  <span className="mr-4 text-pink-500">{item.status}</span>
                  <span className="">{item.createdAt.split("T")[0]}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountBuyRequest
