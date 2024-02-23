// 장바구니 페이지
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cart Page',
  description: '장바구니 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <h1 className='text-red-600 text-center text-xl font-bold py-4'>
        아마도 장바구니 페이지 초안
      </h1>
      <section className='grid grid-cols-2 justify-items-center	my-4'>
        <div className='w-4/5 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            사용자가 선택한 상품에 대한 정보
          </h1>
        </div>
        <div className='w-1/3 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            사용자에 관련한 정보
          </h1>
        </div>
      </section>
    </>
  )
}
