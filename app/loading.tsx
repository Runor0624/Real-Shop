// 프로젝트 전체에 적용하는 로딩 애니메이션

export default function loading() {
  return (
    <p className='text-center text-2xl text-red-600 font-bold py-4'>
      <span className='loading loading-bars loading-lg'></span>로딩중..
    </p>
  )
}
