// Header
'use client'

import { useAuthStore } from '@/app/Util/Zustand/store'
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()
  const { userId, audit, id, logout } = useAuthStore((state) => ({
    userId: state.userId,
    audit: state.audit,
    id: state.id,
    logout: state.logout,
  }))

  const handleLogout = () => {
    logout()
    alert('로그아웃 성공!')
    router.push('/login')
  }
  console.log(audit)
  console.log(userId)
  console.log(id)
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
              {audit.length >= 1 && userId.length >= 1 && (
                <li>
                  <a onClick={() => router.push(`/mypage/${id}`)}>MyPage</a>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              )}
              {audit.length === 0 && userId.length === 0 && (
                <li>
                  <a onClick={() => router.push('/login')}>LogIn</a>
                  <a onClick={() => router.push('/signup')}>SignUp</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
