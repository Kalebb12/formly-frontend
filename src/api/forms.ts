import type { FormType } from "@/types/forms";
import { api } from "./axios";
import type { AxiosError, AxiosResponse } from "axios";

export const getUserForms = async (): Promise<FormType[]> => {
  const res: AxiosResponse<FormType[]> = await api.get('/api/form')
  return res.data
}

export const createForm = async ({ title, description }: Pick<FormType, 'title' | 'description'>): Promise<void> => {
  try {
    await api.post('/api/form', { title, description })
  } catch (error: AxiosError<{ message: string }> | any) {
    throw new Error(error.response?.data?.message || "something went wrong")
  }
}

export const getFormById = async (id: string): Promise<FormType> => {
  try {
    const res: AxiosResponse<FormType> = await api.get(`/api/form/${id}`)
    return res.data
  } catch (error: AxiosError<{ message: string }> | any) {
    throw new Error(error.response?.data?.message || "something went wrong")
  }
}