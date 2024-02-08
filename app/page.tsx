import Link from 'next/link'
import ProductAddButton from '@/components/Product/AddButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Main Page',
  description: '메인 페이지 입니다.',
}

export default function Home() {
  return (
    <>
      <p className='text-center text-xl text-red-600 font-bold'>
        나는 메인 페이지 - 개인 프로젝트 초안.
      </p>
      <Link href='/signup' className='mx-2'>
        회원가입 페이지
      </Link>
      <Link href='/login' className='mx-2'>
        로그인 페이지
      </Link>
      <Link href='/mypage/2' className='mx-2'>
        사용자 마이 페이지
      </Link>
      <Link href='/cart' className='mx-2'>
        장바구니 페이지
      </Link>
      <Link href='/complete' className='mx-2'>
        구매 성공시 보여지는 페이지
      </Link>
      <ProductAddButton />
    </>
  )
}
