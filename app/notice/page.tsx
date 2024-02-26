import NoticeAddButton from '@/components/Notice/AddButton'
import View from '@/components/Notice/View'

// 공지사항 조회하는 페이지
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notice Page',
  description: '공지사항 페이지 입니다.',
}

export default function page() {
  return (
    <>
      <h1 className='text-center text-xl text-red-600 font-bold py-2'>
        공지사항 페이지 입니다
      </h1>
      <View />
      <NoticeAddButton />
    </>
  )
}
