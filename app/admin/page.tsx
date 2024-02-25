// 관리자 페이지 초안
import LogIcon from '@/components/Admin/ETC/LogIcon'
import Infomation from '@/components/Admin/Infomation/Infomation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Page',
  description: '관리자 페이지 입니다.',
}

export default function page() {
  return (
    <>
      <h1 className='text-center text-red-600 text-xl font-bold py-4'>
        관리자 전용 - 관리자 페이지
      </h1>
      <div>
        <LogIcon />
      </div>

      <div className='flex flex-col m-auto items-center'>
        <Infomation />
      </div>
    </>
  )
}
