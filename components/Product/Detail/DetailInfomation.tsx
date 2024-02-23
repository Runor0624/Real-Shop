import GoToCartButton from '@/components/Cart/GoToCartButton'
import DetailImage from './DetailImage'

export default function DetailInfomation() {
  return (
    <>
      <section className='grid grid-cols-2 justify-items-center	my-4'>
        <div className='w-2/3 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            상품 이미지를 보여주는 부분
          </h1>
        </div>
        <div className='w-2/3 border border-blue-500 rounded-md'>
          <h1 className='text-blue-500 text-center text-2xl font-bold py-4'>
            상품 이미지 이외 가격등 정보를 보여주는 부분
          </h1>
          <GoToCartButton />
        </div>
      </section>
      <DetailImage />
    </>
  )
}
