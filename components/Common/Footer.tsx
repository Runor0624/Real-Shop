import Link from 'next/link'

// Footer Components
export default function Footers() {
  return (
    <footer className='footer footer-center p-4 text-base-content border-t-2 border-slate-300'>
      <p className='text-center font-bold text-blue-500'>개인프로젝트 Footer</p>
      <Link
        href='/guest'
        className='text-center font-bold text-blue-500 cursor-pointer'
      >
        방명록
      </Link>
    </footer>
  )
}
