import { getUser, loginFn } from '@/api/auth';
import type { User } from '@/types/user';
import { create } from 'zustand';

type State = {
  user: User | null
  isPending: boolean
  loggingIn: boolean
}

type Action = {
  fetchUser: () => Promise<void>
  logout: () => void
  login: ({ email, password }: { email: string, password: string }) => Promise<void>
}

export const useAuthStore = create<State & Action>((set) => ({
  user: null,
  isPending: false,
  loggingIn: false,

  fetchUser: async () => {
    set({ isPending: true })

    try {
      const res = await getUser();
      set({
        user: res.data,
        isPending: false
      })

    } catch (error) {
      set({
        user: null,
        isPending: false
      })
    }
  },

  login: async (credentials) => {
    try {
      set({loggingIn:true})
      await loginFn(credentials)
      await useAuthStore.getState().fetchUser()
      set({loggingIn:false})
    } catch (error : any) {
      throw new Error(error?.response?.data.message)
    }
  },

  logout: () => set({
    user: null,
    isPending: false
  })
}))