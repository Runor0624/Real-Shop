'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'next/navigation'

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

  if (isLoading) {
    return (
      <p className='text-center text-2xl text-red-600 font-bold'>Loading...</p>
    )
  }
  return (
    <>
      <section className='flex flex-col justify-center items-center m-auto my-6 w-1/2'>
        <label className='text-blue-500 font-bold py-4'>사용자 명</label>
        <input
          placeholder='아마도 사용자의 가입시 입력한 ID가 들어갈 부분입니다.'
          className='text-center w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && data.userId}
        />
        <label className='text-blue-500 font-bold py-4'>권한</label>
        <input
          placeholder='아마도 사용자의 가입시 부여받은 권한값 부분입니다.'
          className='text-center w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && data.audit}
        />
        <label className='text-blue-500 font-bold py-4'>가입 시간</label>
        <input
          placeholder='아마도 사용자의 가입시간이 들어갈 부분입니다.'
          className='text-center w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
          value={data && moment(data.createDate).format('YYYY-MM-DD HH:mm:ss')}
        />
      </section>
    </>
  )
}
