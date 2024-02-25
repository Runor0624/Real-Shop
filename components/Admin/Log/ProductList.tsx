import moment from 'moment'
import { ProductListComponenType } from '@/Types/Types'
// 상품 리스트 관련 정보

const ProductList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/post`, {
    next: { revalidate: 5 },
  })
  const postDatas: ProductListComponenType[] = await res.json()
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr className='text-center'>
              <th>상품명</th>
              <th>카테고리</th>
              <th>가격</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {postDatas.map((item: ProductListComponenType) => (
              <tr className='text-center' key={item.id}>
                <td>{item.title}</td>
                <td>이후 추가 예정</td>
                <td>{item.price}</td>
                <td>{moment(item.createDate).format('YYYY-MM-DD HH:mm:ss')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ProductList
