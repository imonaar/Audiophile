import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'}>
            <Image src='/logo.svg' height={25} alt="audiophile" width={143} />
        </Link>
    )
}
