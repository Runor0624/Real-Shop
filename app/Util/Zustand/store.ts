'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  id: string | number
  userId: string
  audit: string
  login: (authData: {
    id: string | number
    userId: string
    audit: string
  }) => void
  logout: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      id: '',
      userId: '',
      audit: '',
      login: (authData) =>
        set({
          isAuthenticated: true,
          id: JSON.stringify(authData.id),
          userId: JSON.stringify(authData.userId),
          audit: JSON.stringify(authData.audit),
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          userId: '',
          audit: '',
          id: '',
        }),
    }),
    {
      name: 'auth',
      storage: sessionStorage as any,
    },
  ),
)
