import Link from 'next/link'

interface ITypes {
  id: number
  userId: number
  title: string
  body: string
}

const ProductCard = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  })
  const users: ITypes[] = await res.json()

  return (
    <>
      <section className='grid grid-cols-4 justify-items-center	 m-auto'>
        {users.map((user) => (
          <Link href={`/product/detail/${user.id}`} key={user.id}>
            <section className='w-3/4 h-max bg-white rounded-xl m-1'>
              <h1 className='text-xl font-bold py-2'>{user.id}</h1>
              <p className='text-sm py-2'>{user.title.slice(0, 10)}</p>
              <p className='text-sm py-2'>{user.body}</p>
            </section>
          </Link>
        ))}
      </section>
    </>
  )
}
export default ProductCard
