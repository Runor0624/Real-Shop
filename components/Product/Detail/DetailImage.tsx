import DetailImageAdd from './DetailimageAdd'

// 아마도 상품 상세페이지에 보충 설명을 해주는 이미지?
export default function DetailImage() {
  return (
    <>
      <h1 className='text-center text-xl text-blue-500 font-bold py-4'>
        상세이미지 / 텍스트가 들어가는 부분
      </h1>
      <DetailImageAdd />
    </>
  )
}
