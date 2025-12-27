import type { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

// export const getUser = createAsyncThunk(
//   'auth/getUser',
//   async () => {
//     const response = await fetch('/api/auth/me')
//     const data = await response.json()
//     return data
//   },
// )
type AuthState = {
  user: null | User,
  isAuthenticated: boolean,
  loading: boolean,
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    }
  },
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;