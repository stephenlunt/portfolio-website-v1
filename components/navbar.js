import Link from 'next/link'
import ToggleThemeButton from './toggle-theme'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="fixed w-full bg-amber-300/30 dark:bg-zinc-900/30 backdrop-blur-mdz-99">
      <nav className="flex flex-row justify-center items-center mx-auto py-3 px-4 max-w-5xl">
        <div>
          <Link href="/">
            <a className="text-xl item-center my-auto">Stephen Lunt</a>
          </Link>
        </div>

        <ul className="flex flex-row space-between ml-auto px-4 gap-4">
          <li>
            <Link href="#about" scroll={false}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" scroll={false}>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#timeline" scroll={false}>
              <a>Timeline</a>
            </Link>
          </li>
        </ul>

        <Link href="https://github.com/stephenlunt97">
          <button className="w-10 h-10 aspect-square bg-amber-200/50 dark:bg-zinc-900/50 border border-amber-400 dark:border-zinc-600 text-white rounded-md flex items-center justify-center transition-all duration-200 mr-2">
            <BsGithub />
          </button>
        </Link>

        <ToggleThemeButton />
      </nav>
    </div>
  )
}

export default Navbar
