import React, { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ToggleThemeButton = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    return 'dark'
  })

  const toggleTheme = () => {
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', colorTheme)
    setTheme(colorTheme)
  }

  useEffect(() => {
    const rootElement = document.documentElement

    theme === 'light' ? (
      rootElement.classList.remove('dark')
    ) : (
      rootElement.classList.add('dark')
    )
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-md border border-amber-300 bg-amber-200/60 text-slate-700 transition-all duration-200 dark:border-slate-500 dark:bg-slate-700/50 dark:text-slate-200">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  ) : (
    <div />
  )
}

export default ToggleThemeButton
