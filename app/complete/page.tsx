// 아마도 구매 성공시 보여지는 페이지

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page',
  description: '구매 성공시 출력되는 페이지 입니다.',
}
export default function Page() {
  return (
    <section className='flex flex-col justify-center items-center m-auto my-6 border border-slate-300 rounded-md w-1/2'>
      <h1 className='text-center text-xl text-blue-500 font-bold'>
        구매 완료!
      </h1>
      <p className='text-center text-blue-500'>
        당신의 상품 구매에 감사합니다, 입금을 확인하는대로 배송이 준비될
        예정입니다.
      </p>
      <Link href='/'>Go To Main</Link>
    </section>
  )
}
