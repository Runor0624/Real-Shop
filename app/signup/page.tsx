import SignUpComponent from '@/components/Auth/SignUp'

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SignUp Page',
  description: '회원가입 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold py-2'>
        회원가입 페이지
      </h1>

      <SignUpComponent />

      <section className='flex flex-col justify-center items-center'>
        <Link
          href='/login'
          className='text-center text-blue-500 font-bold bg-black h-10 py-2 rounded-xl w-1/3'
        >
          회원이면 여기로 이동하세요!
        </Link>
      </section>
    </>
  )
}
