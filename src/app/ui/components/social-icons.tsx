import Image from "next/image"
import Link from "next/link"

const links = [
    { "name": "instagram", "src": "/assets/shared/desktop/icon-instagram.svg" },
    { "name": "facebook", "src": "/assets/shared/desktop/icon-facebook.svg" },
    { "name": "twitter", "src": "/assets/shared/desktop/icon-twitter.svg" },
]

export default function SocialIcons() {
    return (
        <ul className="flex gap-4 items-center lg:-mt-32">
            {
                links.map(link => (
                    <li key={link.name}>
                        <Link href={link.src}>
                            <Image src={link.src} alt={link.name} height={24} width={24} className="hover:fill-[#D87D4A] transition-colors" />
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
