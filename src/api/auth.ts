import type { authField, registerField } from "@/types/auth.types"
import { api } from "./axios"

export const getUser = async () => api.get('/api/auth/me')
export const loginFn = async ({ email, password }: authField) => api.post('/api/auth/login', {
  email, password
})

export const registerFn = async ({ name, password, email }: registerField) => api.post('/api/auth/register', {
  name, email, password
})