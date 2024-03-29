'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { GuestCardAddType } from '@/Types/Types'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Add() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GuestCardAddType>()

  const onSubmit = async (data: GuestCardAddType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_KEY}/guest`,
        data,
      )
      alert('성공')
      router.push('/')
    } catch (err: any) {
      alert('실패')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-1/2 flex flex-col justify-center items-center m-auto my-4'
      >
        <h1 className='text-center text-xl text-blue-500 font-bold py-2'>
          방명록 추가
        </h1>
        <label className='text-center text-blue-600'>
          사용할 ID를 입력하세요
        </label>
        <input
          placeholder='userId'
          {...register('userId', { required: true })}
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500 bg-white'
        />
        {errors.userId && (
          <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
        )}
        <label className='text-center text-blue-600'>댓글을 입력하세요</label>
        <input
          placeholder='comment'
          {...register('comment', { required: true })}
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500 bg-white'
        />
        {errors.comment && (
          <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
        )}
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
