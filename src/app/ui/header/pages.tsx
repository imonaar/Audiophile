import Links from "../components/nav-links"

export default function Header() {
  return (
    <header className="bg-black">
      <div className="hidden lg:block">
        <Links />
      </div>
    </header>
  )
}
