import DetailInfomation from '@/components/Product/Detail/DetailInfomation'

// 아마도 상품의 상세페이지

export default function page() {
  return (
    <>
      <h1 className='text-xl text-red-600 text-center font-bold py-6'>
        당신이 선택한 상품의 상세페이지
      </h1>
      <div>
        <DetailInfomation />
      </div>
    </>
  )
}
