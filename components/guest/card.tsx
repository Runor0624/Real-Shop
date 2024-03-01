import { GuestCardType } from '@/Types/Types'
import moment from 'moment'

const Card = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/guest`, {
    next: { revalidate: 1 },
  })
  const Cards: GuestCardType[] = await res.json()
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center'>
      {Cards.map((item: GuestCardType) => (
        <section key={item.id}>
          <div className='lg:w-max w-3/4 card bg-base-100 m-2'>
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
