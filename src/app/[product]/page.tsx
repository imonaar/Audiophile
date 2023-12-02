import { getProducts } from "../lib/data"
import MenuItems from "../ui/components/menu-items"
import { Cards } from "../ui/components/product-card"

export default async function Page({ params }: {
    params: {
        product: string
    }
}) {
    const data = await getProducts(params.product)
    
    return (
        <div>
            <div className="flex w-full h-24 md:h-[240px] bg-black text-white items-center justify-center text-3xl md:text-4xl uppercase tracking-wider font-bold  padding-x-mobile md:padding-x-tablet lg:padding-x-desktop">
                {params.product}
            </div>
            <div className="padding-x-mobile md:padding-x-tablet lg:padding-x-desktop grid gap-[120px] pt-16">
                <Cards products={data} />
                <MenuItems/>
            </div>
        </div>
    )
}
