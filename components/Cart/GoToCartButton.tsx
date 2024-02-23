// 장바구니 버튼
'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineShoppingCart } from 'react-icons/ai'
export default function GoToCartButton () {
    const router = useRouter()

    return (
        <button
          className='btn btn-success text-white w-full my-2'
          onClick={() => router.push('/cart')}
        >
          <AiOutlineShoppingCart /> Cart
        </button>
    )
}