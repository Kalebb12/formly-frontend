import { api } from '@/api/axios';
import type { User } from '@/types/user';
import { create } from 'zustand';

type State = {
  user: User | null
  isPending: boolean
}
type Action = {
  fetchUser: () => Promise<void>
  logout: () => void
}

export const useAuthStore = create<State & Action>((set) => ({
  user: null,
  isPending: false,
  fetchUser: async () => {
    set({ isPending: true })

    try {
      const res = await api.get('/api/auth/me')
      set({
        user: res.data.user,
        isPending: false
      })

    } catch (error) {
      set({
        user: null,
        isPending: false
      })
    }
  },
  logout: () => set({
    user: null,
    isPending: false
  })
}))