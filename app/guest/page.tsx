import Add from '@/components/guest/Add'
import Card from '@/components/guest/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guest Page',
  description: '방명록 페이지 입니다.',
}
// 방명록 페이지
export default function page() {
  return (
    <>
      <h1 className='text-center text-blue-500 font-bold m-2'>
        해당 페이지 목적 : 익명으로 방명록을 남기도록 합니다.
      </h1>
      <Add />
      <Card />
    </>
  )
}
