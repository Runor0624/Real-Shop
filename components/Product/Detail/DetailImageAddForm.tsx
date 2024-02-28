// 상세페이지 보충 설명용 이미지 추가하는 부분
'use client'

import { AiOutlinePlus } from 'react-icons/ai'

export default function DetailImageAddForm() {
  return (
    <>
      <form className='w-1/2 flex flex-col justify-center items-center m-auto my-4'>
        <input placeholder='userId' className='hidden' />
        <label className='text-center text-xl text-red-600 font-bold'>
          제목을 입력하시오.
        </label>
        <input
          placeholder='title'
          className='w-full sm:w-3/4 h-10 rounded-md my-2 text-blue-500 bg-white'
        />
        <label className='text-center text-xl text-red-600 font-bold'>
          설명을 입력하시오.
        </label>
        <input
          placeholder='description'
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
