'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  userId: string
  audit: string
  login: (authData: { userId: string; audit: string }) => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      userId: '',
      audit: '',
      login: (authData) =>
        set({
          isAuthenticated: true,
          userId: authData.userId,
          audit: authData.audit, // 서버에서 받아온 값 설정
        }),
    }),
    {
      name: 'auth',
    },
  ),
)
