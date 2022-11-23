import Link from 'next/link'
import ToggleThemeButton from './toggle-theme'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full bg-amber-300/30 backdrop-blur-md transition-colors duration-700 dark:bg-zinc-900/30">
      <nav className="mx-auto flex max-w-4xl flex-row items-center justify-center py-3 px-4">
        <div>
          <Link href="/">
            <a className="item-center my-auto text-xl">Stephen Lunt</a>
          </Link>
        </div>

        <div className="ml-auto flex flex-row">
          <Link href="https://github.com/stephenlunt97">
            <button className="mr-2 flex aspect-square h-10 w-10 items-center justify-center rounded-md border border-amber-400 bg-amber-200/60 text-black transition-all duration-200 dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-white">
              <BsGithub />
            </button>
          </Link>

          <ToggleThemeButton />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
