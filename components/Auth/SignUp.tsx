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

export default function SignUpComponent() {
  const Temp = () => {
    toast.success('회원가입 성공.', { autoClose: 1000, pauseOnHover: false })
  }
  return (
    <form className='w-2/3 border border-slate-300 rounded-md flex flex-col justify-center items-center m-auto my-2'>
      <label className='py-2 font-bold'>UserID</label>
      <input
        className='w-2/3 h-10 rounded-md'
        placeholder='사용할 UserId를 입력하세요'
      />

      <label className='py-2 font-bold'>Password</label>
      <input
        className='w-2/3 h-10 rounded-md'
        type='password'
        placeholder='사용할 비밀번호를 입력하세요'
      />

      <button className='my-2 btn btn-success' onClick={() => Temp}>
        <AiOutlineUserAdd /> SignUp
      </button>
    </form>
  )
}
