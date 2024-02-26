'use client'

import { useAuthStore } from '@/app/Util/Zustand/store'
import { useRouter } from 'next/navigation'
import { AiOutlinePlus } from 'react-icons/ai'

export default function NoticeAddButton() {
  const { audit } = useAuthStore((state) => ({
    audit: state.audit,
  }))
  const router = useRouter()
  return (
    <>
      {audit === `${process.env.NEXT_PUBLIC_ADMIN_AUDIT}` && (
        <button
          className='btn btn-success text-white'
          onClick={() => router.push('/notice/add')}
        >
          <AiOutlinePlus /> Add
        </button>
      )}
    </>
  )
}
