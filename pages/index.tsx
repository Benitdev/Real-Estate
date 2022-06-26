import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import DefaultLayout from "../components/DefaultLayout"
import Banner from "../components/Banner"
import News from "../components/News"
import ForYou from "../components/ForYou"
import { unstable_getServerSession } from "next-auth"
import axios from "axios"

const Home: NextPage<any> = ({ realEstates }) => {
  return (
    <DefaultLayout>
      <Banner />
      <News />
      <ForYou realEstates={realEstates} />
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: any) {
  const { data: realEstates } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/real-estate`
  )
  return {
    props: {
      realEstates,
    },
  }
}
export default Home
