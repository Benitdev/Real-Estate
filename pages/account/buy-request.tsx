import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import DefaultLayout from "../../components/DefaultLayout"
import AccountInfo from "../../components/AccountInfo"
import AccountSidebar from "../../components/AccountSidebar"
import { useSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"
import axios from "axios"
import AccountBuyRequest from "../../components/AccountBuyRequest"
const Account: NextPage<any> = ({ user, buyRequests }) => {
  const { data: session, status } = useSession()
  console.log(buyRequests)
  if (status === "loading")
    return (
      <DefaultLayout>
        <div className="mx-auto mt-10 grid min-h-screen w-[75%] grid-cols-10 space-x-4">
          <p> Loading... </p>
        </div>
      </DefaultLayout>
    )
  if (status === "unauthenticated")
    return (
      <DefaultLayout>
        <div className="mx-auto mt-10 grid min-h-screen w-[75%] grid-cols-10 space-x-4">
          <p> Access Denied </p>
        </div>
      </DefaultLayout>
    )
  return (
    <DefaultLayout>
      <div className="mx-auto mt-10 grid min-h-screen w-[75%] grid-cols-10 space-x-4 pb-10">
        <AccountSidebar />
        {/* <AccountInfo user={user} /> */}
        <AccountBuyRequest buyRequests={buyRequests} />
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: any) {
  const userId = await getToken({ req: context.req })
  const { data: user } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/user/${userId?.sub}`
  )
  const { data: buyRequests } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/buy-request/`,
    {
      params: {
        id: userId?.sub,
      },
    }
  )
  return {
    props: {
      user,
      buyRequests,
    },
  }
}

export default Account
