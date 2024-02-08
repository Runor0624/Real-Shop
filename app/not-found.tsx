// 프로젝트 전역의 에러 페이지로 사용합니다.

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error Page',
  description: '에러 페이지 입니다.',
}

export default function Notfound() {
  return (
    <section className='m-auto flex flex-col justify-center w-1/2 min-h-screen'>
      <h1 className='text-center text-2xl text-red-600 font-bold py-4'>
        Error Page
      </h1>
      <p className='text-center text-xl font-bold underline py-6'>
        귀하에게 이 페이지 접근 권한은 없습니다, 즉시 이전 페이지로
        돌아가십시오.
      </p>
      <Link
        href='/'
        className='text-center text-white font-bold bg-black h-10 py-2'
      >
        메인 페이지로 돌아가기
      </Link>
    </section>
  )
}
