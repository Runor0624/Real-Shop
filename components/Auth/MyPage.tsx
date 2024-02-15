'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'

interface MyPageType {
  id: number | string
  audit: string
  userId: string
  createDate: string
}

export default function MyPage() {
  const params = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['mydata'],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_KEY}/user/my/${params.id}`,
      )
      return response.data
    },
  })

  return (
    <>
      <section className='flex flex-col justify-center items-center m-auto my-6 w-1/2'>
        <input
          placeholder='아마도 사용자의 가입시 입력한 ID가 들어갈 부분입니다.'
          className='w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && data.userId}
        />

        <input
          placeholder='아마도 사용자의 가입시간이 들어갈 부분입니다.'
          className='w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && data.createDate}
        />

        <input
          placeholder='아마도 사용자의 권한이 들어갈 부분입니다.'
          className='w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && data.audit}
        />
      </section>
    </>
  )
}
