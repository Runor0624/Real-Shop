'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface CardAddType {
  userId: string
  comment: string
}

export default function Add() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CardAddType>()

  const onSubmit = async (data: CardAddType) => {
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
        className='w-1/2 border border-slate-300 flex flex-col justify-center items-center m-auto my-4'
      >
        <h1 className='text-center text-xl font-bold py-2'>방명록 추가</h1>
        <input
          placeholder='userId'
          {...register('userId', { required: true })}
          className='m-2  w-full border border-slate-300 bg-white'
        />
        <input
          placeholder='comment'
          {...register('comment', { required: true })}
          className='m-2  w-full border border-slate-300 bg-white'
        />
        <button type='submit'>ADD</button>
      </form>
    </>
  )
}
