'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { SignUpType } from '@/Types/Types'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuthStore } from '@/app/Util/Zustand/store'

export default function SignUpComponent() {
  const router = useRouter()
  const { userId, audit, id } = useAuthStore((state) => ({
    userId: state.userId,
    audit: state.audit,
    id: state.id,
  }))
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpType>()
  const onSubmit = async (data: SignUpType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_KEY}/user/signup`,
        data,
      )
      alert('성공')
      router.push('/signup')
    } catch (err: any) {
      alert('실패')
    }
  }
  /* 만약 로그인된 사용자가 회원가입 페이지에 접근시 이 부분 사용 */
  if (audit.length >= 1 || userId.length >= 1) {
    return router.push('/')
  }
  /* 만약 로그인된 사용자가 회원가입 페이지에 접근시 이 부분 사용 */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-2/3 flex flex-col justify-center items-center m-auto my-2'
    >
      <label className='py-2 text-blue-500 font-bold'>UserID</label>
      <input
        {...register('userId', { required: true })}
        className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        placeholder='사용할 UserId를 입력하세요'
      />
      {errors.userId && (
        <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
      )}

      <label className='py-2 text-blue-500 font-bold'>Password</label>
      <input
        className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        {...register('password', { required: true })}
        type='password'
        placeholder='사용할 비밀번호를 입력하세요'
      />
      {errors.password && (
        <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
      )}

      <input
        {...register('audit', { required: true })}
        className='w-2/3 h-10 rounded-md my-2 bg-white hidden'
        value='Normal'
      />

      <button
        className='my-2 btn btn-md btn-success text-white w-full sm:w-1/2'
        type='submit'
      >
        <AiOutlinePlus /> SignUp
      </button>
    </form>
  )
}
