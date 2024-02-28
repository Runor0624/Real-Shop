import DetailImageAddForm from '@/components/Product/Detail/DetailImageAddForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Detail Image Add Page',
  description: '상품 상세 페이지 입니다.',
}

// 상품 추가 관련
export default function page() {
  return (
    <>
      <DetailImageAddForm />
    </>
  )
}
