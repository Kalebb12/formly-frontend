import type { FormType } from "@/types/forms";
import { api } from "./axios";
import type { AxiosResponse } from "axios";

export const getUserForms = async (): Promise<FormType[]> => {
  const res: AxiosResponse<FormType[]> = await api.get('/api/form')
  return res.data
}