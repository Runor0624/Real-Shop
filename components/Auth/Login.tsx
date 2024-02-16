'use client'
{
  /* 이후 진행할 내용
1. 전역 상태관리 라이브러리에 적용할것 -> 로그인 상태
2. 예를 들어 Recoil을 사용한다면 새로고침해도 리코일 저장정보가 유지되어야함.
3. react-toastify 등 으로 사용자에게 로그인 성공/실패를 인지시킬것.
*/
}
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
      className='w-2/3 border border-slate-300 rounded-md flex flex-col justify-center items-center m-auto my-2'
    >
      <label className='py-2 font-bold'>UserID</label>
      <input
        {...register('userId', { required: true })}
        className='w-2/3 h-10 rounded-md'
        placeholder='가입한 UserId를 입력하세요'
      />

      <label className='py-2 font-bold'>Password</label>
      <input
        {...register('password', { required: true })}
        className='w-2/3 h-10 rounded-md'
        type='password'
        placeholder='가입한 비밀번호를 입력하세요'
      />

      <button className='my-2 btn btn-success' type='submit'>
        <AiOutlineUnlock /> Login
      </button>
    </form>
  )
}
