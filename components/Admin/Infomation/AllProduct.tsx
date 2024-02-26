const AllProduct = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_KEY}/post/admin/count/product`,
    {
      next: { revalidate: 10 },
    },
  )
  const AllProducts = await res.json()
  return (
    <>
      <p className='text-center text-blue-500 font-bold py-4'>
        전체 상품 수 : {AllProducts.count}
      </p>
    </>
  )
}
export default AllProduct
