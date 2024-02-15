// 상품 추가 페이지로 안내하는 버튼 - 관리자 전용
'use client'

import { useAuthStore } from '@/app/Util/Zustand/store'
import { useRouter } from 'next/navigation'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ProductAddButton() {
  const { audit } = useAuthStore((state) => ({
    audit: state.audit,
  }))
  const router = useRouter()
  return (
    <>
      {audit === `${process.env.NEXT_PUBLIC_ADMIN_AUDIT}` && (
        <button
          className='btn btn-success text-white'
          onClick={() => router.push('/product/add')}
        >
          <AiOutlinePlus /> Add
        </button>
      )}
    </>
  )
}
