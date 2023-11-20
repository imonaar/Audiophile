import Image from "next/image"
import Link from "next/link"

const menuitems = [
  {
    "name": "earphones",
    "src": "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    "url": "/earphones"
  },
  {
    "name": "headphones",
    "src": "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    "url": "/headphones"
  },
  {
    "name": "speakers",
    "src": "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    "url": "/speakers"
  },
]


export default function MenuItems() {
  return (
    <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
      {
        menuitems.map(item => (
          <div key={item.name} className="w-full relative py-6">
            <div className="w-ful h-40 bg-[#F1F1F1] absolute bottom-0 left-0 w-full rounded-lg"></div>
            <div className="flex flex-col items-center">
              <Image src={item.src} alt={item.name} width={122} height={160} className="z-10 mb-2" />
              <div className="flex flex-col items-center gap-4 bg-transparent z-10">
                <h3 className="uppercase font-semibold text-black tracking-wider text-sm">{item.name}</h3>
                <Link href='/' className="flex items-center gap-3">
                  <p className="font-semibold text-sm uppercase">shop</p>
                  <Image src="/assets/shared/desktop/icon-arrow-right.svg" width={5} height={10} alt='icon arrow right' />
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
