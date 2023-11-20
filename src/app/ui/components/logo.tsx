import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image src="/assets/shared/desktop/logo.svg" alt="audiophile logo" height={25} width={143} />
        </Link>
    )
}
