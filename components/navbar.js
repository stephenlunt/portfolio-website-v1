import Link from "next/link"
import ToggleThemeButton from "./toggle-theme"

const Navbar = () => {
  return (
    <div className="stick bg-amber-300/30 dark:bg-zinc-900/30 backdrop-blur-md">
      <div className="flex flex-row justify-center items-center mx-auto py-4 px-4 max-w-5xl">
        <div>
          <Link href="/">
            <a>Stephen Lunt</a>
          </Link>
        </div>
        
        <ul className="flex flex-row space-between ml-auto px-4 gap-4">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <ToggleThemeButton />
      </div>
    </div>
  )
}

export default Navbar