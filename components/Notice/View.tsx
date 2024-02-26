// 공지사항을 보여주는 컴포넌트
import { NoticeViewComponentType } from '@/Types/Types'
import moment from 'moment'

const View = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/notice`, {
    next: { revalidate: 1 },
  })
  const Views: NoticeViewComponentType[] = await res.json()
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        {Views.map((item: NoticeViewComponentType) => (
          <div className='collapse collapse-plus bg-base-200' key={item.id}>
            <input type='radio' name='my-accordion-3' defaultChecked />
            <div className='collapse-title text-xl font-medium'>
              {item.title}
            </div>
            <div className='collapse-content'>
              <p>
                등록일 : {moment(item.createDate).format('YYYY-MM-DD HH:mm:ss')}
              </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default View
