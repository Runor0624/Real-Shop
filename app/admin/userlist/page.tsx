// 사용자 리스트 페이지

import UserList from '@/components/Admin/Log/UserList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin UserList Page',
  description: '관리자 - 사용자 리스트 페이지 입니다.',
}
export default function page() {
  return (
    <>
      <h1 className='text-center text-xl text-blue-500 font-bold'>
        사용자 리스트 - 이후 강제 탈퇴 추가 예정.
      </h1>
      <UserList />
    </>
  )
}
