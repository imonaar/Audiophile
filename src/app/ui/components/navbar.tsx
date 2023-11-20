"use client"

import { useState } from "react"

import Image from "next/image"
import MenuItems from "./menu-items"
import Logo from "./logo"
import Links from "./nav-links"


export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex w-full items-center bg-black padding-x-mobile h-[90px] lg:h-24 md:padding-x-tablet lg:padding-x-desktop">
      <nav className="w-full flex justify-between items-center md:gap-10">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden focus:outline-none" aria-pressed={isMenuOpen} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          <Image src='/assets/shared/tablet/icon-hamburger.svg' alt="hamburger menu" height={16} width={16} />
        </button>

        {
          isMenuOpen && <div className="absolute w-full top-24 left-0 bg-white px-6 py-8 lg:hidden">
            <MenuItems />
          </div>
        }

        <Logo />

        <div className=" hidden md:block lg:hidden grow"></div>

        <div className="hidden lg:flex md:grow lg:justify-center">
          <Links />
        </div>
        
        <button className="focus:outline-none">
          <Image src="/assets/shared/desktop/icon-cart.svg" alt="cart" height={20} width={23} />
        </button>
      </nav>
    </div>
  )
}

