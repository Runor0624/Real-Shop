import { GuestCardType } from '@/Types/Types'
import moment from 'moment'

const Card = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/guest`, {
    next: { revalidate: 1 },
  })
  const Cards: GuestCardType[] = await res.json()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2'>
      {Cards.map((item: GuestCardType) => (
        <section className='m-auto my-2 w-1/2' key={item.id}>
          <div className='card w-96 bg-base-100'>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>작성자 : {item.userId}</h2>
              <p>내용 : {item.comment}</p>
              <p>
                작성 시간 :{' '}
                {moment(item.createDate).format('YYYY-MM-DD HH:mm:ss')}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
export default Card
