// 상세 설명 용 이미지와 텍스트 추가하는대 사용하는 버튼
'use client'
import { AiOutlinePlus } from 'react-icons/ai'

export default function DetailImageAdd() {
  return (
    <>
      <button className='btn btn-success text-white'>
        <AiOutlinePlus /> Add
      </button>
    </>
  )
}
