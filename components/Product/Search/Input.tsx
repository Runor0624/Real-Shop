'use client'
// 사용자에게 Input을 클릭하면 검색페이지로 이동시키는 목적의 컴포넌트
import { useRouter } from 'next/navigation'

export default function ProductSearchInput() {
  const router = useRouter()
  return (
    <>
      <input
        onClick={() => router.push('/product/search')}
        placeholder='상품을 검색할려면 여기를 클릭하세요!'
        className='w-3/4 rounded-lg my-2 h-10'
      />
    </>
  )
}
