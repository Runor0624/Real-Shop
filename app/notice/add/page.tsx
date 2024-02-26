import AddNotice from '@/components/Notice/Add'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notice ADD Page',
  description: '공지사항 추가 페이지 입니다.',
}

export default function page() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold py-4'>
        관리자 전용 - 공지사항을 추가하는 페이지입니다.
      </h1>
      <AddNotice />
    </>
  )
}
