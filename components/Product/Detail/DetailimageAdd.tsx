// 상세 설명 용 이미지와 텍스트 추가하는대 사용하는 버튼
'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export default function DetailImageAdd() {
  const router = useRouter()

  return (
    <>
      <button
        className='btn btn-success text-white'
        onClick={() => router.push('/product/detail/add')}
      >
        <AiOutlinePlus /> Adds
      </button>
    </>
  )
}
