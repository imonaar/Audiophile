import Image from "next/image";
import clsx from "clsx";
import Link from "next/link"
import { Product } from "@/app/lib/types";


export function Cards({ products }: {products: Product[]}) {
    return (
        <ul className="grid gap-[120px]">
            {
                products.map((product, index) => {
                    const { image, slug, description, name, is_new, category } = product
                    let name_ = name.split(' ')
                    let cat = name_.pop()
                    let new_name = name_.join(' ')

                    return (
                        <li key={product.id}>
                            <div className="overflow-hidden grid gap-2 md:gap-14  lg:grid-cols-2">
                                <div className="rounded-lg overflow-hidden w-full  h-[352px] lg:h-[560px] relative flex items-center justify-center">
                                    <Image
                                        src={image.mobile}
                                        alt="Audiophile best audio gear"
                                        sizes="100vw"
                                        className="w-full h-auto md:hidden"
                                        width={0}
                                        height={0}
                                    />
                                    {/* Display Tablet only */}
                                    <Image
                                        src={image.tablet}
                                        alt="Audiophile best audio gear"
                                        sizes="10vw"
                                        className="w-full h-auto hidden md:block lg:hidden"
                                        width={0}
                                        height={0}
                                    />
                                    {/* Display Desktop only */}
                                    <Image
                                        src={image.desktop}
                                        alt="Audiophile best audio gear"
                                        sizes="50vw"
                                        className="w-full h-auto hidden lg:block"
                                        width={0}
                                        height={0}
                                    />
                                </div>
                                <div className={clsx("flex flex-col items-center gap-6 text-center lg:ps-28 lg:items-start lg:text-left lg:justify-center", {
                                    'lg:order-first lg:ps-0': index % 2 !== 0
                                })}>
                                    {is_new && <span className="text-[#D87D4A] tracking-[.5em] uppercase text-sm">NEW PRODUCT</span>}
                                    <h3 className="text-3xl font-bold md:text-4xl md:mb-2 uppercase">{new_name} <br /> {cat}</h3>
                                    <p className="text-sm opacity-50 md:inline-block md:w-[570px] lg:w-full">{description}</p>
                                    <Link href={`/${category}/${slug}`} className="uppercase px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#D87D4A]">
                                        see product
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}