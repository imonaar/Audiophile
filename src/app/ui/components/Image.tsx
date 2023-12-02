import Image from "next/image"

export function ImageMobile({ url, alt }: {
    url: string,
    alt: string
}) {
    return <Image
        src={url}
        alt={alt}
        sizes="100vw"
        className="w-full h-auto md:hidden"
        width={0}
        height={0}
    />
}

export function ImageTablet({ url, alt }: {
    url: string,
    alt: string
}) {
    return <Image
        src={url}
        alt={alt}
        sizes="100vw"
        className="w-full h-auto hidden md:block lg:hidden"
        width={0}
        height={0}
    />
}

export function ImageDesktop({ url, alt }: {
    url: string,
    alt: string
}) {
    return <Image
        src={url}
        alt={alt}
        sizes="100vw"
        className="w-full h-auto hidden lg:block"
        width={0}
        height={0}
    />
}
