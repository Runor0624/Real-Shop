// 공지사항 추가
'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuthStore } from '@/app/Util/Zustand/store'
import { NoticeAddComponentType } from '@/Types/Types'

export default function AddNotice() {
  const { id } = useAuthStore((state) => ({
    id: state.id,
  }))
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NoticeAddComponentType>()

  const onSubmit = async (data: NoticeAddComponentType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_KEY}/notice`,
        data,
      )
      alert('성공')
      router.push('/')
    } catch (err: any) {
      if (err.response.status >= 400 && err.response.status < 500) {
        alert('입력 데이터를 확인해주세요')
        return
      }

      alert('서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-1/2 flex flex-col justify-center items-center m-auto my-4'
      >
        <input
          placeholder='userId'
          {...register('userId', { required: true })}
          className='hidden'
          value={id}
        />
        <label className='lg:text-xl text-base text-center text-red-600 font-bold'>
          공지사항에 작성할 제목을 입력하시오.
        </label>
        <input
          placeholder='title'
          {...register('title', { required: true })}
          className='w-full sm:w-3/4 h-10 rounded-md my-2 text-blue-500 bg-white'
        />
        <label className='lg:text-xl text-base text-center text-red-600 font-bold'>
          공지사항에 작성할 설명을 입력하시오.
        </label>
        <input
          placeholder='description'
          {...register('description', { required: true })}
          className='w-full sm:w-3/4 h-10 rounded-md my-2 text-blue-500 bg-white'
        />
        <button
          className='my-2 btn btn-md btn-success text-white w-full sm:w-1/2'
          type='submit'
        >
          <AiOutlinePlus /> ADD
        </button>
      </form>
    </>
  )
}
