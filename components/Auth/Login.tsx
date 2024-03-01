'use client'

import { AiOutlineUnlock } from 'react-icons/ai'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/app/Util/Zustand/store'
import { LoginType } from '@/Types/Types'

export default function LoginComponent() {
  const router = useRouter()
  const { login } = useAuthStore()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginType>()
  const onSubmit = async (data: LoginType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_KEY}/user/login`,
        data,
      )
      alert('성공')
      login({
        id: response.data.id,
        userId: response.data.userId,
        audit: response.data.audit,
      })
      router.push('/')
    } catch (err: any) {
      alert('실패')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-2/3 flex flex-col justify-center items-center m-auto my-2'
    >
      <label className='py-2 text-blue-500 font-bold'>UserID</label>
      <input
        {...register('userId', { required: true })}
        className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        placeholder='가입한 UserId를 입력하세요'
      />
      {errors.userId && (
        <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
      )}
      <label className='py-2 text-blue-500 font-bold'>Password</label>
      <input
        {...register('password', { required: true })}
        className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        type='password'
        placeholder='가입한 비밀번호를 입력하세요'
      />
      {errors.password && (
        <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
      )}
      <button
        className='my-2 btn btn-md btn-success text-white w-full sm:w-1/2'
        type='submit'
      >
        <AiOutlineUnlock /> Login
      </button>
    </form>
  )
}
