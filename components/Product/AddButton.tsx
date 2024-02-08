// 상품 추가 페이지로 안내하는 버튼 - 관리자 전용
'use client'

import { useRouter } from 'next/navigation'

export default function ProductAddButton() {
  const router = useRouter()
  return (
    <>
      <button
        className='btn btn-success text-white'
        onClick={() => router.push('/product/add')}
      >
        Add
      </button>
    </>
  )
}
