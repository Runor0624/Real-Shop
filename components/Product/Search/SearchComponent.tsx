'use client'
// 아마도 검색어를 입력하고 검색값 기준으로 결과물을 보여주는 목적의 컴포넌트가 될것???

export default function SearchComponent() {
  return (
    <>
      <input
        className='w-3/4 rounded-lg my-2 h-10'
        placeholder='검색어를 입력하세요'
      />

      <h1 className='text-center text-xl font-bold py-4'>
        아마도 여기는 검색어에 대한 결과 보여주는 부분
      </h1>

      <div className='join'>
        {' '}
        {/* 페이지네이션 예시 */}
        <button className='join-item btn'>«</button>
        <button className='join-item btn'>Page 22</button>
        <button className='join-item btn'>»</button>
      </div>
    </>
  )
}
