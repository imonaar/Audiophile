"use client"

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react"
import Logo from "./logo"
import Links from "./nav-links"
import Link from "next/link"
import Image from "next/image"

export default function Navigationbar() {
  return (
    <Navbar classNames={{}}>
      <NavbarMenuToggle />
      <Logo />
      <Links />
      <button>
        <Image src='/icon-cart.svg' alt="shopping cart" height={15} width={23} />
      </button>
    </Navbar>
  )
}

{/* <Navbar className="px-0">
  <NavbarBrand>
    <Logo />
  </NavbarBrand>
  <NavbarContent>
    <Links />
  </NavbarContent>
  <NavbarContent>
    <NavbarItem>
      <Button as={Link} href="">
        <Image src='/icon-cart.svg' alt="shopping cart" height={15} width={23} />
      </Button>
    </NavbarItem>
  </NavbarContent>
</Navbar> */}