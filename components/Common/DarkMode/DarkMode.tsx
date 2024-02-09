'use client'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function DarkMode() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const onClick = (mode: string) => () => {
    setTheme(mode)
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='bg-darkModeBg cursor-pointer fixed right-14 bottom-6 bg-white rounded-xl z-20'>
      {currentTheme === 'dark' ? (
        <BsFillMoonFill
          onClick={onClick('light')}
          className='text-center text-xl m-2'
        />
      ) : (
        <BsFillSunFill
          onClick={onClick('dark')}
          className='text-center text-xl m-2'
        />
      )}
    </div>
  )
}
