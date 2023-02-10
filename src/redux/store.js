import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import newtourReducer from "./newtourSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
    newtour : newtourReducer,
  },
})