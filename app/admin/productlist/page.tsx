// 아마도 상품 관련 정보를 전체적으로 보여주는 페이지?
import ProductList from '@/components/Admin/Log/ProductList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin ProductList Page',
  description: '관리자 - 상품 리스트 페이지 입니다.',
}
export default function page() {
  return (
    <>
      <h1 className='text-center text-xl text-blue-500 font-bold py-2'>
        모든 상품 리스트를 표 형태로 제공하는 페이지 입니다
      </h1>
      <ProductList />
    </>
  )
}
