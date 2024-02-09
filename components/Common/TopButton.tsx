'use client'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useState, useEffect } from 'react'

export default function TopButton() {
  const [isShowBtn, setIsShowBtn] = useState(false)

  const scrolTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setIsShowBtn(true)
      } else {
        setIsShowBtn(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])

  return (
    <>
      {isShowBtn && (
        <section className='fixed right-4 bottom-6'>
          <AiOutlineArrowUp onClick={scrolTop} />
        </section>
      )}
    </>
  )
}
