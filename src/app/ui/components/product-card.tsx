import Image from "next/image";
import clsx from "clsx";

interface Images {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Product {
    id: number;
    slug: string;
    name: string;
    image: Images;
    category: string;
    categoryImage: Images;
    is_new?: boolean;
    price?: number;
    description?: string;
    features?: string;
    includes?: [];
    gallery?: {};
    others?: {}
}



export function Card({ image, slug, description }: Pick<Product, 'image' | 'slug' | 'description'>) {

    return (
        <div className="overflow-hidden grid gap-2 md:gap-14 lg:gap-0 lg:grid-cols-2">
            <div className="rounded-lg bg-[#f1f1f1] overflow-hidden w-full  relative flex items-center justify-center">
                <Image src={image.mobile} alt={slug} sizes="100vw" className="w-full h-auto md:hidden" width={0} height={0} />
                <Image src={image.tablet} alt={slug} sizes="100vw" className="w-full h-auto hidden md:block lg:hidden" width={0} height={0} />
                <Image src={image.desktop} alt={slug} sizes="100vw" className="w-full h-auto hidden lg:block" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center gap-6 text-center lg:ps-28 lg:items-start lg:text-left lg:justify-center">
                <span className="text-[#D87D4A] tracking-[.5em] uppercase text-sm">NEW PRODUCT</span>
                <h3 className="text-3xl font-bold md:text-4xl md:mb-2">XX59 <br /> Headphones</h3>
                <p className="text-sm opacity-50 md:inline-block md:w-[570px] lg:w-full">{description}</p>
                <button className="uppercase px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#D87D4A]">
                    see product
                </button>
            </div>
        </div>
    )
}

export function Cards({ products }) {
    return (
        <ul className="grid gap-[120px]">
            {
                products.map((product, index) => {
                    const { image, slug, description, name, is_new} = product
                    let name_ = name.split(' ')
                    let category = name_.pop()
                    let new_name = name_.join(' ')
                    console.log(name, " category" , category, "newname", name_)
                    return (
                        <li key={product.id}>
                            <div className="overflow-hidden grid gap-2 md:gap-14  lg:grid-cols-2">
                                <div className="rounded-lg bg-[#f1f1f1] overflow-hidden w-full  h-[352px] lg:h-[560px] relative">
                                    <Image
                                        src={image.mobile}
                                        alt="Audiophile best audio gear"
                                        sizes="100vw"
                                        className="w-full h-auto md:hidden"
                                        fill
                                        objectFit="cover"
                                    />
                                    {/* Display Tablet only */}
                                    <Image
                                        src={image.tablet}
                                        alt="Audiophile best audio gear"
                                        sizes="100vw"
                                        className="w-full h-auto hidden md:block lg:hidden"
                                        fill
                                        objectFit="cover"
                                    />
                                    {/* Display Desktop only */}
                                    <Image
                                        src={image.desktop}
                                        alt="Audiophile best audio gear"
                                        sizes="50vw"
                                        className="w-full h-auto hidden lg:block"
                                        fill
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={clsx("flex flex-col items-center gap-6 text-center lg:ps-28 lg:items-start lg:text-left lg:justify-center", {
                                    'lg:order-first lg:ps-0': index % 2 !== 0
                                })}>
                                    {is_new && <span className="text-[#D87D4A] tracking-[.5em] uppercase text-sm">NEW PRODUCT</span>}
                                    <h3 className="text-3xl font-bold md:text-4xl md:mb-2 uppercase">{new_name} <br /> {category}</h3>
                                    <p className="text-sm opacity-50 md:inline-block md:w-[570px] lg:w-full">{description}</p>
                                    <button className="uppercase px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#D87D4A]">
                                        see product
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}