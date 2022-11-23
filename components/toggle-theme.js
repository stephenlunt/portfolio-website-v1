import { useState, useEffect } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
    }

    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return isMounted ? (
    <button
      className="flex aspect-square h-10 w-10 items-center justify-center rounded-md border border-amber-400 bg-amber-200/60 text-slate-700 transition-all duration-200 dark:border-slate-500 dark:bg-slate-700/50 dark:text-slate-200"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
    </button>
  ) : (
    <div />
  )
}

export default ToggleThemeButton
