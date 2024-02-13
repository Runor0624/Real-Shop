'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  login: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
    }),
    {
      name: 'auth',
    },
  ),
)
