'use client'

import GoToCartButton from '@/components/Cart/GoToCartButton'
import DetailImage from './DetailImage'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

export default function DetailInfomation() {
  const params = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['ProductDetailData'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/post/detail/${params.id}`).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) {
    return (
      <p className='text-center text-2xl text-red-600 font-bold'>Loading...</p>
    )
  }
  return (
    <>
      <section className='grid grid-cols-2 justify-items-center	my-4'>
        <div className='w-1/2 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            상품 이미지를 보여주는 부분
          </h1>

          {data && (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_KEY}/${data.images}`}
              alt='상품 이미지'
              width={455}
              height={100}
            />
          )}
        </div>
        {data && (
          <div className='w-2/3 border border-blue-500 rounded-md'>
            <h1 className='text-blue-500 text-center text-xl font-bold py-4'>
              상품 명 : {data.title}
            </h1>
            <p className='text-center'>상품 설명 : {data.description}</p>
            <p className='text-blue-500 text-center text-xl font-bold py-4'>
              상품 가격 : {data.price}원
            </p>
            <GoToCartButton />
          </div>
        )}
      </section>
      <section className='w-2/3 border-t-2 border-blue-500 m-auto'>
        <DetailImage />
      </section>
    </>
  )
}
