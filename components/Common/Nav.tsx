// Header
'use client'

import { useAuthStore } from '@/app/Util/Zustand/store'
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore((state) => state)
  console.log(isAuthenticated)
  return (
    <>
      <div className='navbar border-b-2 border-slate-300'>
        <div className='flex-1'>
          <a
            className='btn btn-ghost text-xl text-blue-500'
            onClick={() => router.push('/')}
          >
            Logo-Temp
          </a>
        </div>
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <div className='w-10'>
                <p className='text-blue-500'>Menu</p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-22'
            >
              <li>
                <a onClick={() => router.push('/mypage/1')}>Admin</a>
              </li>
              <li>
                <a onClick={() => router.push('/mypage/1')}>MyPage</a>
              </li>
              <li>
                <a onClick={() => router.push('/login')}>LogIn</a>
              </li>
              <li>
                <a onClick={() => router.push('/signup')}>SignUp</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
