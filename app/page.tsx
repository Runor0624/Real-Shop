import ProductAddButton from '@/components/Product/AddButton'
import Banner from '@/components/Product/Slick/Slick'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Main Page',
  description: '메인 페이지 입니다.',
}

export default function Home() {
  return (
    <>
      <p className='text-center text-xl text-red-600 font-bold'>
        나는 메인 페이지 - 개인 프로젝트 초안.
      </p>
      <section className='w-full h-1/4'>
        <Banner />
      </section>
      <ProductAddButton />
    </>
  )
}
