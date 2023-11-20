import Logo from "../components/logo"
import Links from "../components/nav-links"
import SocialIcons from "../components/social-icons"

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col items-center gap-12 pb-9 md:items-start md:gap-8 md:pb-12 padding-x-mobile md:padding-x-tablet lg:padding-x-desktop">
      <div className="bg-[#D87D4A] w-[100px] h-[4px] md:mb-6 lg:mb-10"></div>

      <div className="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:justify-between w-full">
        <Logo/>
        <Links />
      </div>

      <p className="text-center text-base md:text-start inline-block lg:max-w-xl">
        Audiophile is an all in one stop to fulfill your audio needs.
        We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
        Come and visit our demo facility - we&apos;re open 7 days a week.
      </p>

      <div className="md:mt-6 flex flex-col items-center gap-14 md:w-full md:flex-row md:justify-between">
        <p>Copyright 2021. All Rights Reserved</p>
        <SocialIcons />
      </div>
    </footer>
  )
}
