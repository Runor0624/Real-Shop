// 관리자 전용 - 상품 추가

export default function ProductAdd() {
  return (
    <>
      <form className='flex flex-col justify-center items-center'>
        <input placeholder='상품 제목' />
        <input placeholder='상품 설명' />
        <input placeholder='가격' />
        <input placeholder='이미지' />
        <button>ADD</button>
      </form>
    </>
  )
}
