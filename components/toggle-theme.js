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
      className="w-10 h-10 aspect-square bg-amber-200/50 dark:bg-slate-700/50 border border-amber-400 dark:border-slate-500 text-slate-700 dark:text-slate-200 rounded-md flex items-center justify-center transition-all duration-200"
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
