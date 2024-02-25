import DetailInfomation from '@/components/Product/Detail/DetailInfomation'

// 아마도 상품의 상세페이지
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Detail Page',
  description: '상품 상세 페이지 입니다.',
}
export default function page() {
  return (
    <>
      <h1 className='text-xl text-red-600 text-center font-bold py-6'>
        당신이 선택한 상품의 상세페이지
      </h1>
      <div>
        <DetailInfomation />
      </div>
    </>
  )
}
