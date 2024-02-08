import SignUpComponent from '@/components/Auth/SignUp'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SignUp Page',
  description: '회원가입 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-xl font-bold py-2'>회원가입 페이지</h1>

      <SignUpComponent />

      <section className='flex flex-col justify-center items-center'>
        <Link
          href='/login'
          className='text-center text-sm text-slate-300 font-bold py-2'
        >
          <AiOutlineInfoCircle /> 회원이면 여기로 이동하세요!
        </Link>
      </section>
    </>
  )
}
