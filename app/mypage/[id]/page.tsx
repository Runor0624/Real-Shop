// 사용자 마이페이지 입니다.
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page',
  description: '사용자 마이 페이지 입니다.',
}

export default function Page() {
  return (
    <section className='flex flex-col justify-center items-center m-auto my-6 border border-slate-300 rounded-md w-1/2'>
      <h1 className='text-2xl font-bold py-4'>사용자 마이 페이지 입니다</h1>

      <input
        placeholder='아마도 사용자의 가입시 입력한 ID가 들어갈 부분입니다.'
        className='w-1/2 h-10 rounded-md my-2'
      />

      <input
        placeholder='아마도 사용자의 가입시간이 들어갈 부분입니다.'
        className='w-1/2 h-10 rounded-md my-2'
      />

      <input
        placeholder='아마도 사용자의 권한이 들어갈 부분입니다.'
        className='w-1/2 h-10 rounded-md my-2'
      />

      <Link href='/'>Go To Main</Link>
    </section>
  )
}
