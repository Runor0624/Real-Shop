// 관리자 전용 - 상품 추가
import { AiOutlinePlus } from 'react-icons/ai'

export default function ProductAdd() {
  return (
    <>
      <form className='flex flex-col justify-center items-center'>
        <label className='py-2 text-blue-500 font-bold'>
          상품 제목을 입력하시오
        </label>
        <input
          placeholder='상품 제목'
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        <label className='py-2 text-blue-500 font-bold'>
          상품 설명을 입력하시오
        </label>
        <input
          placeholder='상품 설명'
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        <label className='py-2 text-blue-500 font-bold'>
          상품 가격을 입력하시오
        </label>

        <input
          placeholder='가격'
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        <label className='py-2 text-blue-500 font-bold'>
          상품 대표 이미지를 입력하시오
        </label>

        <input
          placeholder='이미지'
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        <button
          type='submit'
          className='my-2 btn btn-md btn-success text-white w-full sm:w-1/2'
        >
          <AiOutlinePlus /> ADD
        </button>
      </form>
    </>
  )
}
