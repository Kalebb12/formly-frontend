import { api } from "./axios"

export const getUser = async () => api.get('/api/auth/me')
export const loginFn = async ({email,password}: {email: string, password: string}) => api.post('/api/auth/login',{
  email,password
})