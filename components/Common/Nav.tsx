// Header
'use client'

import { useAuthStore } from '@/app/Util/Zustand/store'
import { useRouter } from 'next/navigation'
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSolution,
  AiOutlineLogin,
  AiOutlinePlus,
} from 'react-icons/ai'

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

  return (
    <>
      <div className='navbar border-b-2 border-slate-300'>
        <div className='flex-1'>
          <a
            className='btn btn-ghost text-xl text-blue-500'
            onClick={() => router.push('/')}
          >
            Real-Shop
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
              {audit === `${process.env.NEXT_PUBLIC_ADMIN_AUDIT}` && (
                <li>
                  <a onClick={() => router.push('/admin')}>
                    <AiOutlineHome />
                    Admin
                  </a>
                </li>
              )}
              {audit.length >= 1 && userId.length >= 1 && (
                <li>
                  <a onClick={() => router.push(`/mypage/${id}`)}>
                    <AiOutlineSolution /> MyPage
                  </a>
                  <a onClick={handleLogout}>
                    <AiOutlineLogout />
                    Logout
                  </a>
                </li>
              )}
              {audit.length === 0 && userId.length === 0 && (
                <li>
                  <a onClick={() => router.push('/login')}>
                    <AiOutlineLogin /> LogIn
                  </a>
                  <a onClick={() => router.push('/signup')}>
                    <AiOutlinePlus />
                    SignUp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
