const AllUser = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_KEY}/user/admin/user/count`,
    {
      next: { revalidate: 10 },
    },
  )
  const Allusers = await res.json()
  return (
    <>
      <p className='text-center text-blue-500 font-bold py-4'>
        전체 사용자 수 : {Allusers.count}
      </p>
    </>
  )
}
export default AllUser
