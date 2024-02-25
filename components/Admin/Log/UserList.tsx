import moment from 'moment'
import { UserListComponentType } from '@/Types/Types'

// UserList Component

const UserList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/user`, {
    next: { revalidate: 5 },
  })
  const userDatas: UserListComponentType[] = await res.json()

  return (
    <>
      <section className='grid grid-cols-4 justify-items-center'>
        {userDatas.map((item: UserListComponentType) => (
          <section
            className='w-3/4 border border-blue-500 rounded-lg m-1'
            key={item.id}
          >
            <h1 className='text-center text-xl font-bold py-2'>
              사용자 명 : {item.userId}
            </h1>
            <p className='text-center font-bold py-2'>권한 : {item.audit}</p>
            <p className='text-center font-bold py-2'>
              가입일 : {moment(item.createDate).format('YYYY-MM-DD HH:mm:ss')}
            </p>
          </section>
        ))}
      </section>
    </>
  )
}
export default UserList
