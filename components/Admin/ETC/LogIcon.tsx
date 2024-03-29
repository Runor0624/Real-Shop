import Link from 'next/link'

// 아마도 각 로그 페이지 등 관리자 전용으로 안내하는 부분?
export default function LogIcon() {
  return (
    <>
      <section className='grid grid-cols-2 justify-items-center'>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <Link href='/admin/userlist'>
            <p className='text-blue-500 text-center font-bold py-4'>UserList</p>
          </Link>
        </div>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <Link href='/admin/productlist'>
            <p className='text-blue-500 text-center font-bold py-4'>
              ProductList
            </p>
          </Link>
        </div>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <p className='text-blue-500 text-center font-bold py-4'>
            로그인 로그 - 구현예정
          </p>
        </div>
      </section>
    </>
  )
}
