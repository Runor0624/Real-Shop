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
      <section className='grid grid-cols-4 justify-items-center	 m-auto'>
        {posts.map((post) => (
          <section
            className='w-3/4 h-max bg-white rounded-xl m-1'
            key={post.id}
          >
            <h1 className='text-xl font-bold py-2'>{post.id}</h1>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_KEY}/${post.images}`}
              alt='상품 이미지'
              width={100}
              height={100}
            />
            <p className='text-sm py-2'>{post.title}</p>
          </section>
        ))}
      </section>
    </>
  )
}
export default ProductCard
