import { getUser } from "@/api/auth"
// import type { User } from "@/types/user"
import { clearUser, setUser } from "./authSlice"
import type { AxiosResponse } from "axios"
import type { AppDispatch } from "./store"

export const getMe = () => async (dispatch: AppDispatch) => {
  try {
    const res: AxiosResponse = await getUser()
    dispatch(setUser(res.data))
  } catch (error) {
    dispatch(clearUser());
  }
}