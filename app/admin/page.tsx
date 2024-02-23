// 관리자 페이지 초안
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Page',
    description: '관리자 페이지 입니다.',
}

export default function page () {
    return (
        <>
            <h1 className='text-center text-red-600 text-xl font-bold py-4'>관리자 전용 - 관리자 페이지</h1>
        </>
    )
}