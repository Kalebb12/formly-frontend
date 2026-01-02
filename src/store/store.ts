import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import designerSlice from "./DesignerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    designer: designerSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch