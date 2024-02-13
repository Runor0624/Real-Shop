'use client'

{
  /* 이후 진행할 내용
1. react-toastify 등 으로 사용자에게 회원가입 성공/실패를 인지시킬것.
2. React-hook-form을 사용하여 통신 관련 부분을 처리할것.
*/
}

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlineUserAdd } from 'react-icons/ai'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface SignUpType {
  userId: string
  password: string
  audit: string
}

export default function SignUpComponent() {
  const router = useRouter()
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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-2/3 flex flex-col justify-center items-center m-auto my-2'
    >
      <label className='py-2 font-bold'>UserID</label>
      <input
        {...register('userId', { required: true })}
        className='w-2/3 h-10 rounded-md bg-white'
        placeholder='사용할 UserId를 입력하세요'
      />

      <label className='py-2 font-bold'>Password</label>
      <input
        className='w-2/3 h-10 rounded-md my-2 bg-white'
        {...register('password', { required: true })}
        type='password'
        placeholder='사용할 비밀번호를 입력하세요'
      />

      <input
        {...register('audit', { required: true })}
        className='w-2/3 h-10 rounded-md my-2 bg-white hidden'
        value='0006'
      />

      <button type='submit'>SignUp</button>
    </form>
  )
}