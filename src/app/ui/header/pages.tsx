import Navigationbar from "../components/navbar"

export default function Header() {
  return (
    <header className="bg-black w-full padding-x-mobile md:padding-x-tablet lg:padding-x-desktop">
      <Navigationbar />
      {/* <header className="relative w-ful">
        <div className="absolute left-0 top-0 w-full h-full  flex items-end justify-center lg:hidden">
          <div className="relative">
            <ImageMobile url={assets.hero.mobile} alt="hero image" />
          </div>
        </div>
        <div className="py-28 px-6 flex flex-col items-center gap-6 z-10">
          <span className="font-sm uppercase tracking-widest text-white opacity-50">NEW PRODUCT</span>
          <h1 className="text-center text-4xl text-white uppercase font-bold tracking-wide z-10">
            XX99 Mark II
            <br />
            HeadphoneS
          </h1>
          <p className="text-sm opacity-50 text-white text-center inline-block w-[300px]">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link href="/" className="px-8 py-4 font-bold text-sm uppercase text-white bg-[#d87d4a] z-10"> See Product </Link>
        </div>
      </header> */}
    </header>
  )
}
