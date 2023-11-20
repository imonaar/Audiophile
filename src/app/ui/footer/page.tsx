import Links from "../components/nav-links"

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col items-center gap-12 px-6 pb-9 md:items-start md:px-10 md:gap-8 md:pb-12 lg:px-40">
      <div className="bg-[#D87D4A] w-[100px] h-[4px] md:mb-6 lg:mb-10"></div>

      <div className="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:justify-between w-full">
        <a href="" className=""> Audiophile</a>
        <Links />
      </div>

      <p className="text-center text-base md:text-start inline-block max-w-xl">
        Audiophile is an all in one stop to fulfill your audio needs.
        We&aposre a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
        Come and visit our demo facility - we’re open 7 days a week.
      </p>

      <div className="md:mt-6">
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  )
}
