import { createSlice } from '@reduxjs/toolkit'

export const newtourSlice = createSlice({
  name: 'newtour',
  initialState:{
    tour:null
  },
  reducers: {
    addTour: (state,action)=>{
      state.tour=action.payload
    }
  },
})

export const { addTour } = newtourSlice.actions

export const selectUser = (state) => state.tour

export default newtourSlice.reducer