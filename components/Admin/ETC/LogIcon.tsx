import Link from 'next/link'

// 아마도 각 로그 페이지 등 관리자 전용으로 안내하는 부분?
export default function LogIcon() {
  return (
    <>
      <section className='grid grid-cols-4 justify-items-center'>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <Link href='/admin/userlist'>
            <p className='text-blue-500 text-center font-bold py-4'>
              Temp-UserList
            </p>
          </Link>
        </div>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <Link href='/admin/productlist'>
            <p className='text-blue-500 text-center font-bold py-4'>
              Temp-ProductList
            </p>
          </Link>
        </div>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <p className='text-blue-500 text-center font-bold py-4'>
            Temp-ProductList
          </p>
        </div>
        <div className='w-1/2 border border-blue-500 rounded-md my-6'>
          <p className='text-blue-500 text-center font-bold py-4'>Temp</p>
        </div>
      </section>
    </>
  )
}
