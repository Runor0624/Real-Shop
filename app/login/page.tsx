// 로그인 페이지
import Link from 'next/link'
import LoginComponent from '@/components/Auth/Login'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Page',
  description: '로그인 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-xl font-bold'>로그인 페이지</h1>

      <LoginComponent />

      <section className='flex flex-col justify-center items-center'>
        <Link
          href='/signup'
          className='text-center text-sm text-slate-300 font-bold py-2'
        >
          <AiOutlineInfoCircle /> 회원이 아니면 여기로 가세요!
        </Link>
      </section>
    </>
  )
}
