import Head from "next/head"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
    <Head>
      <title>
        snap
      </title>
    </Head>
    <div>
      <Navbar />
      <div className="flex xl:gap-36">
      <div className="pt-32 max-xl:pt-16 xl:pl-48">
      <img src="/image-hero-mobile.png" className="xl:hidden w-screen" />
      <h1 className="text-7xl max-xl:pt-10 font-bold mb-12 max-xl:text-center">Make<br /> Remote Work</h1>
      <p className="w-3/5 max-xl:w-screen max-xl:px-20 max-xl:text-xl max-xl:text-center text-slate-500 leading-7">Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.</p>
        <div className="max-xl:text-center">
        <button className="border-2 max-xl:text-center bg-black ease-in duration-300 text-white font-bold p-2 mt-10 mb-2 pb-3 rounded-xl px-6 hover:bg-white hover:text-black hover:border-black">Learn More</button>
        <div className="max-xl:gap-4 max-xl:justify-evenly flex pt-9 gap-10">
          <img className="brand-images" src="/client-databiz.svg" />
          <img className="brand-images2" src="/client-audiophile.svg" />
          <img className="brand-images" src="/client-meet.svg" />
          <img className="brand-images" src="/client-maker.svg" />
        </div>
        </div>
        
      </div>
      <img className="max-w-xl pt-16 pr-44 max-xl:hidden" src="/image-hero-desktop.png" />
      </div>
  
    </div>
    </>
  )
}