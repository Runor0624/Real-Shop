// 사용자 마이페이지 입니다.
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'My Page',
	description: '사용자 마이 페이지 입니다.',
}

export default function Page () {
    return (
        <>
            <p>사용자 마이 페이지 입니다</p>
        </>
    )
}