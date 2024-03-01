// 상세 설명 용 이미지와 텍스트 추가하는대 사용하는 버튼
'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/Util/Zustand/store'

export default function DetailImageAdd() {
  const { audit } = useAuthStore((state) => ({
    audit: state.audit,
  }))
  const router = useRouter()

  return (
    <>
      {audit === `${process.env.NEXT_PUBLIC_ADMIN_AUDIT}` && (
        <button
          className='btn btn-success text-white'
          onClick={() => router.push('/product/detail/add')}
        >
          <AiOutlinePlus /> Adds
        </button>
      )}
    </>
  )
}
