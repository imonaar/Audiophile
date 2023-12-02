import { getProductBySlug } from "@/app/lib/data"
import { Product } from "@/app/lib/types"
import MenuItems from "@/app/ui/components/menu-items"
import Image from "next/image"
import Link from "next/link"

export default async function ProductPage({ params }: {
  params: {
    slug: string,
    product: string
  }
}) {
  const product = await getProductBySlug(params.slug)

  let name_ = product.name.split(' ')
  let cat = name_.pop()
  let new_name = name_.join(' ')

  return (
    <div className="padding-x-mobile md:padding-x-tablet lg:padding-x-desktop ">
      <div className="mt-4 mb-6 md:mt-8 lg:mt-20 lg:mb-14">
        <Link href={`/${product.category}`} className="opacity-50 font-sm ">Go Back</Link>
      </div>
      <div className="grid gap-20 md:gap-36 lg:gap-40">
        <section className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-28">
          {/* header */}
          <div className="rounded-lg overflow-hidden w-full md:flex-5 h-[327px] md:h-[480px] md:gap-16 lg:h-[560px] lg:flex-6 relative flex items-center justify-center">
            <Image
              src={product.image.mobile}
              alt="Audiophile best audio gear"
              sizes="100vw"
              className="w-full h-auto md:hidden"
              width={0}
              height={0}
            />
            {/* Display Tablet only */}
            <Image
              src={product.image.tablet}
              alt="Audiophile best audio gear"
              sizes="100vw"
              className="w-full h-auto hidden md:block lg:hidden"
              width={0}
              height={0}
            />
            {/* Display Desktop only */}
            <Image
              src={product.image.desktop}
              alt="Audiophile best audio gear"
              sizes="50vw"
              className="w-full h-auto hidden lg:block"
              width={0}
              height={0}
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-6 md:justify-center lg:flex-5">
            {product.is_new && <span className="text-[#D87D4A] tracking-[.5em] uppercase text-sm">NEW PRODUCT</span>}
            <h3 className="text-3xl font-bold md:text-4xl md:mb-2 uppercase">{new_name} <br /> {cat}</h3>
            <p className="text-sm opacity-50">{product.description}</p>

            <span className="font-bold tracking-wider text-lg">$ {product.price} </span>
            <div className="flex gap-4 items-center">
              <div className="flex-2 bg-[#979797] h-full opacity-50 flex items-center gap-5 p-4">
                <button className="px-3 font-bold text-sm">-</button>
                <span className="text-black">1</span>
                <button className="px-3 font-bold text-sm">+</button>
              </div>
              <div className="flex-3">
                <button className="text-white bg-[#D87d4a] px-8 py-4 text-sm uppercase font-semibold tracking-wide w-full"> Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
        <section className="grid items-start text-medium  gap-20 md:gap-32 lg:grid-cols-[2fr_1fr] ">
          {/* features */}
          <div>
            <h3 className="uppercase font-bold text-2xl md:text-3xl mb-6 md:mb-8">features</h3>
            <p className="opacity-50 text-base">
              {product.features}
            </p>
          </div>
          {/* includes */}
          <div className="flex flex-col gap-6 md:gap-8 md:flex-row lg:flex-col">
            <h3 className="uppercase font-semibold text-2xl md:text-3xl md:flex-1">in the box</h3>
            <ul className="md:flex-1">
              {
                product.includes.map(item => (
                  <li key={item.item}>
                    <p className="inline-flex gap-5 mb-2">
                      <span className="text-[#D87D4A] font-semibold">{item.quantity}X</span>
                      <span className="opacity-50"> {item.item} </span>
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        {/* gallery */}
        <section className="grid gap-6 md:grid-cols-[4fr_6fr] lg:grid-cols-[4fr_5.5fr] md:gap-8">
          <div className="grid gap-6 md:gap-8">
            <div className="rounded-lg overflow-hidden w-full  h-[174px] lg:h-[280px] relative flex items-center justify-center">
              <Image
                src={product!.gallery.first.mobile}
                alt="Audiophile best audio gear"
                sizes="100vw"
                className="w-full h-auto md:hidden"
                width={0}
                height={0}
              />
              {/* Display Tablet only */}
              <Image
                src={product.gallery.first.tablet}
                alt="Audiophile best audio gear"
                sizes="100vw"
                className="w-full h-auto hidden md:block lg:hidden"
                width={0}
                height={0}
              />
              {/* Display Desktop only */}
              <Image
                src={product.gallery.first.desktop}
                alt="Audiophile best audio gear"
                sizes="50vw"
                className="w-full h-auto hidden lg:block"
                width={0}
                height={0}
              />
            </div>
            <div className="rounded-lg overflow-hidden w-full  h-[174px] lg:h-[280px] relative flex items-center justify-center">
              <Image
                src={product.gallery.second.mobile}
                alt="Audiophile best audio gear"
                sizes="100vw"
                className="w-full h-auto md:hidden"
                width={0}
                height={0}
              />
              {/* Display Tablet only */}
              <Image
                src={product.gallery.second.tablet}
                alt="Audiophile best audio gear"
                sizes="100vw"
                className="w-full h-auto hidden md:block lg:hidden"
                width={0}
                height={0}
              />
              {/* Display Desktop only */}
              <Image
                src={product.gallery.second.desktop}
                alt="Audiophile best audio gear"
                sizes="50vw"
                className="w-full h-auto hidden lg:block"
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden w-full  h-[368px] lg:h-[592px] relative flex items-center justify-center">
            <Image
              src={product.gallery.third.mobile}
              alt="Audiophile best audio gear"
              sizes="100vw"
              className="w-full h-auto md:hidden"
              width={0}
              height={0}
            />
            {/* Display Tablet only */}
            <Image
              src={product.gallery.third.tablet}
              alt="Audiophile best audio gear"
              sizes="100vw"
              className="w-full h-auto hidden md:block lg:hidden"
              width={0}
              height={0}
            />
            {/* Display Desktop only */}
            <Image
              src={product.gallery.third.desktop}
              alt="Audiophile best audio gear"
              sizes="50vw"
              className="w-full h-auto hidden lg:block"
              width={0}
              height={0}
            />
          </div>
        </section>
        {/*  */}
        <section className="flex flex-col gap-10">
          <h3 className="uppercase text-center text-2xl text-black font-bold md:text-3xl">You May also like</h3>
          <ul className="flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-8">
            {
              product.others.map(item => {
                const slug = item.slug
                const splt = slug.split('-')
                const category = splt.at(-1)
                return (
                  <li className="flex flex-col items-center gap-8 w-full" key={item.slug}>
                    <div className="rounded-lg overflow-hidden w-full  h-[120px] md:h-[318px] relative flex items-center justify-center">
                      <Image
                        src={item.image.mobile}
                        alt="Audiophile best audio gear"
                        sizes="100vw"
                        className="w-full h-auto md:hidden"
                        width={0}
                        height={0}
                      />
                      {/* Display Tablet only */}
                      <Image
                        src={item.image.tablet}
                        alt="Audiophile best audio gear"
                        sizes="100vw"
                        className="w-full h-auto hidden md:block lg:hidden"
                        width={0}
                        height={0}
                      />
                      {/* Display Desktop only */}
                      <Image
                        src={item.image.desktop}
                        alt="Audiophile best audio gear"
                        sizes="50vw"
                        className="w-full h-auto hidden lg:block"
                        width={0}
                        height={0}
                      />
                    </div>
                    <p className="uppercase text-2xl tracking-wider font-semibold">{item.name}</p>
                    <Link href={`/${category}/${item.slug}`} className="text-white bg-[#D87d4a] px-8 py-4 text-sm uppercase font-semibold tracking-wide">See Product</Link>
                  </li>
                )
              })
            }
          </ul>
        </section>
        {/* menu items */}
        <section>
          <MenuItems />
        </section>
      </div>
    </div>
  )
}
