import AllProduct from './AllProduct'
import AllUser from './AllUser'

export default function Infomation() {
  return (
    <>
      <div className='w-1/4 border border-blue-500 rounded-md my-2'>
        <AllUser /> <AllProduct />
      </div>
    </>
  )
}
