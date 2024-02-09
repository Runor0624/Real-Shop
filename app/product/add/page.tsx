// 아마도 상품 추가 페이지

import ProductAdd from '@/components/Product/ProductAdd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product ADD Page',
  description: '관리자 전용 - 상품 추가 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-center text-2xl text-red-600 font-bold py-4'>
        관리자 전용 - 상품 추가 페이지 입니다.
      </h1>
      <ProductAdd />
    </>
  )
}
