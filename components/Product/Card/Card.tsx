import Link from 'next/link'
import Image from 'next/image'

import { ProductCardComponentType } from '@/Types/Types'

const ProductCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/post`, {
    next: { revalidate: 10 },
  })
  const posts: ProductCardComponentType[] = await res.json()
  return (
    <>
      <div className='flex flex-row justify-center py-2'>
        <p className='badge badge-secondary text-blue-500 font-bold m-2'>
          임시- 필터 조건 추가 예정
        </p>
        <p className='badge badge-secondary text-blue-500 font-bold m-2'>
          임시- 필터 조건 추가 예정2
        </p>
      </div>

      <section className='grid grid-cols-4 justify-items-center	 m-auto'>
        {posts.map((post) => (
          <section
            className='w-3/4 h-max bg-white rounded-xl m-1'
            key={post.id}
          >
            <Link href={`/product/detail/${post.id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_KEY}/${post.images}`}
                alt='상품 이미지'
                width={400}
                height={100}
              />
              <p className='text-sm font-bold p-2'>상품 제목 : {post.title}</p>
              <p className=' text-violet-600 font-bold p-2'>
                상품 가격 :{' '}
                {[post.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </p>
              <p className='badge badge-secondary text-blue-500 font-bold m-2'>
                카테고리 : {post.category}
              </p>
            </Link>
          </section>
        ))}
      </section>
    </>
  )
}
export default ProductCard
