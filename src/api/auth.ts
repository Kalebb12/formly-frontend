import type { authField, registerField } from "@/types/auth.types"
import { api } from "./axios"
import type { AxiosResponse } from "axios"
import type { User } from "@/types/user"

export const getUser = async (): Promise<AxiosResponse> => api.get('/api/auth/me')
export const loginFn = async ({ email, password }: authField) => api.post('/api/auth/login', {
  email, password
})
export const registerFn = async ({ name, password, email }: registerField): Promise<AxiosResponse<{ user: User }>> => api.post('/api/auth/register', {
  name, email, password
})