// 로그인 페이지
import Link from 'next/link'
import LoginComponent from '@/components/Auth/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Page',
  description: '로그인 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold'>
        로그인 페이지
      </h1>

      <LoginComponent />

      <section className='flex flex-col justify-center items-center'>
        <Link
          href='/signup'
          className='text-center text-blue-500 font-bold bg-black h-10 py-2 rounded-xl w-1/3'
        >
          회원이 아니면 여기로 가세요!
        </Link>
      </section>
    </>
  )
}
