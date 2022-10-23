import { useState, useEffect } from 'react'
import { BsMoonStars, BsEmojiSunglasses } from 'react-icons/bs'

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

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return isMounted ? (
    <button 
      className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={toggleTheme} 
      aria-label="Toogle Theme"
    >
      {theme === 'light' ? (
        <BsMoonStars />
      ) : (
        <BsEmojiSunglasses />
      )}
    </button>
  ) : (
    <div />
  )
}

export default ToggleThemeButton