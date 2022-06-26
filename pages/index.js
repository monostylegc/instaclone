import Head from "next/head"
import Feed from "../components/feed"
import Header from "../components/header"

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>
          Insta 2.0 hhh
        </title>
      </Head>
      <Header></Header>
      <Feed></Feed>
    </div>
  )
}
