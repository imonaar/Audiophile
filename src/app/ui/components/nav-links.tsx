import Link from "next/link"

const links = [
    { name: 'home', href: '/' },
    { name: 'headphones', href: '/headphones' },
    { name: 'speakers', href: '/speakers' },
    { name: 'earphones', href: '/earphones' },
]

export default function Links() {
    return (
        <div className="text-white flex flex-col gap-4 items-center md:flex-row md:gap-8">
            {
                links.map(link => (
                    <Link className="uppercase font-bold text-sm tracking-wider hover:text-[#D87D4A] transition-colors" key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                ))
            }
        </div>
    )
}