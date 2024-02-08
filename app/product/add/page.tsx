// 아마도 상품 추가 페이지
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product ADD Page',
  description: '관리자 전용 - 상품 추가 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-2xl font-bold py-4'>
        관리자 전용 - 상품 추가 페이지 입니다.
      </h1>
    </>
  )
}
