// 아마도 구매 성공시 보여지는 페이지

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page',
  description: '구매 성공시 출력되는 페이지 입니다.',
}

export default function Page() {
  return (
    <>
      <p>구매 성공시 출력되는 페이지 초안</p>
    </>
  )
}
