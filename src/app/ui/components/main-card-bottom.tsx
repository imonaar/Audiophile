import Image from "next/image"

const images = {
    mobile: "/assets/shared/mobile/image-best-gear.jpg",
    tablet: "/assets/shared/tablet/image-best-gear.jpg",
    desktop: "/assets/shared/desktop/image-best-gear.jpg",
}

export default function MainCardBottom() {
    return (
        <div className="flex flex-col items-center gap-10 md:gap-16 lg:flex-row-reverse">
            <div className="w-full lg:flex-1 rounded-lg overflow-hidden">
                {/* <Image src={images.mobile} alt="Audiophile best audio gear" sizes="100vw" className="w-full h-auto md:hidden" width={327} height={300} />   
                <Image src={images.tablet} alt="Audiophile best audio gear" sizes="100vw" className="w-full h-auto hidden md:block lg:hidden" width={689} height={300} />   
                <Image src={images.desktop} alt="Audiophile best audio gear" sizes="50vw" className="w-full h-auto hidden lg:block" width={540} height={588} />    */}
                <Image src={images.desktop} alt="Audiophile best audio gear" sizes="50vw" className=" hidden lg:block" width={540} height={588} />   
            </div>
            <div className="flex flex-col items-center gap-8 text-center md:w-[73%] lg:flex-1 lg:text-left lg:items-start">
                <h3 className="uppercase text-black text-3xl font-bold tracking-wider md:text-4xl ">Bringing you the <span className="text-[#D87D4A]"> best </span> audio gear</h3>
                <p className="align-center text-black opacity-40">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}
