import Image from "next/image"

import MainCardBottom from "./ui/components/main-card-bottom"
import MenuItems from "./ui/components/menu-items"
import Link from "next/link"

const assets = {
  pattern: "/assets/home/desktop/pattern-circles.svg",
  zx9: {
    mobile: "/assets/home/mobile/image-speaker-zx9.png",
    tablet: "/assets/home/tablet/image-speaker-zx9.png",
    desktop: "/assets/home/desktop/image-speaker-zx9.png",
  },
  zx7: {
    mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
    tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
    desktop: "/assets/home/desktop/image-speaker-zx7.jpg",
  },
  earphones: {
    mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
    tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
    desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
  },
}

export default function Home() {
  return (
    <main className=" grid gap-6">
      {/* <MenuItems /> */}
      <div className="w-full flex flex-col items-center pt-14 pb-16 gap-16 bg-[#D87D4A] bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-top bg-contain bg-no-repeat mt-24 rounded-lg
        lg:flex-row lg:pb-0 overflow-hidden lg:pt-24
      ">
        <div className="w-full h-[237px] flex justify-center lg:flex-1 lg:h-auto ">
          <Image className="md:hidden" src={assets.zx9.mobile} alt="zx9 speaker" width={200} height={237} />
          <Image className="hidden md:block lg:hidden" src={assets.zx9.tablet} alt="zx9 speaker" width={200} height={237} />
          <Image className="hidden lg:block -mb-4" src={assets.zx9.desktop} alt="zx9 speaker" width={410} height={493} />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center gap-6 text-white 
        lg:flex-1 lg:pb-32
        ">
          <h3 className="text-6xl font-bold ">ZX9 <br/> SPEAKER</h3>
          <p className="mb-4 inline-block w-[300px] opacity-50">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link href='/' className="px-8 py-2 text-white bg-black uppercase text-sm font-semibold">
            see product
          </Link>
        </div>
      </div>

      <div className="w-full h-[320px] bg-red-200 rounded-lg"></div>

      <div className="w-full rounded-lg flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="w-full h-200px rounded-lg overflow-hidden md:flex-1 md:h-[320px]">
          <Image src={assets.earphones.mobile} alt="YX! earphones" sizes="100vw" className="w-full h-auto md:hidden" width={327} height={200} />
          <Image src={assets.earphones.tablet} alt="YX! earphones" sizes="50vw" className="w-full h-auto hidden md:block lg:hidden" width={339} height={320} />
          <Image src={assets.earphones.tablet} alt="YX! earphones" sizes="50vw" className="w-full h-auto hidden lg:block" width={540} height={320} /> 
        </div>

        <div className="px-6 py-10 text-black bg-[#f1f1f1] rounded-lg md:flex-1 flex flex-col md:justify-center items-start ">
          <h3 className="text-3xl tracking-wider mb-8 lg:ml-8">YX1 EARPHONES</h3>
          <Link className=" border border-black px-8 py-1 justify-start lg:ml-8" href='/'>
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </main>
  )
}
