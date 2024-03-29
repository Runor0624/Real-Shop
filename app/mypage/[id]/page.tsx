// 사용자 마이페이지 입니다.

import Link from 'next/link'
import type { Metadata } from 'next'
import MyPage from '@/components/Auth/MyPage'

export const metadata: Metadata = {
  title: 'My Page',
  description: '사용자 마이 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-2xl text-red-600 text-center font-bold py-4'>
        사용자 마이 페이지 입니다
      </h1>
      <MyPage />

      <div className='flex flex-row justify-center'>
        <>
          <Link
            href='/'
            className='text-center text-blue-500 font-bold bg-black h-10 py-2 rounded-xl w-1/4 my-2'
          >
            Go To Main
          </Link>
        </>
      </div>
    </>
  )
}
