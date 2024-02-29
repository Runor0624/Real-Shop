import SearchComponent from '@/components/Product/Search/SearchComponent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Detail Search Page',
  description: '상품 검색 페이지 입니다.',
}

export default function page() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold py-2'>
        상품 검색 페이지 초안 - 특정 값 기준 검색 진행
      </h1>
      <div className='flex flex-col justify-center items-center'>
        <SearchComponent />
      </div>
    </>
  )
}
