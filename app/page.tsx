import ProductAddButton from '@/components/Product/AddButton'
import ProductCard from '@/components/Product/Card/Card'
import Banner from '@/components/Product/Slick/Slick'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Main Page',
  description: '메인 페이지 입니다.',
}

export default function Home() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold py-4'>
        나는 메인 페이지 - 개인 프로젝트 초안.
      </h1>
      <section className='w-full h-1/4'>
        <Banner />
      </section>
      <ProductCard />
      <ProductAddButton />
    </>
  )
}
