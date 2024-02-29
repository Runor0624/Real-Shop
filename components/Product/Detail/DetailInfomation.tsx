'use client'

import GoToCartButton from '@/components/Cart/GoToCartButton'
import DetailImage from './DetailImage'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ITypes {
  id: number
  userId: number
  title: string
  price: string
  description: string
  images: string
  createDate: string
}
export default function DetailInfomation() {
  const params = useParams()
  console.log(params)
  const [isData, setIsData] = useState<any>({}) // any 타입 추후 변경 예정

  const getData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_KEY}/post/detail/${params.id}`,
    )
    setIsData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(isData)
  return (
    <>
      <section className='grid grid-cols-2 justify-items-center	my-4'>
        <div className='w-1/2 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            상품 이미지를 보여주는 부분
          </h1>

          <Image
            src={`${process.env.NEXT_PUBLIC_URL_KEY}/${isData.images}`}
            alt='상품 이미지'
            width={455}
            height={100}
          />
        </div>
        <div className='w-2/3 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-xl font-bold py-4'>
            상품 명 : {isData.title}
          </h1>
          <p className='text-center'>상품 설명 : {isData.description}</p>
          <p className='text-blue-500 text-center text-xl font-bold py-4'>
            상품 가격 : {isData.price}원
          </p>
          <GoToCartButton />
        </div>
      </section>
      <section className='w-2/3 border-t-2 border-blue-500 m-auto'>
        <DetailImage />
      </section>
    </>
  )
}
