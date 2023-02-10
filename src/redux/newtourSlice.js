import { createSlice } from '@reduxjs/toolkit'

export const newtourSlice = createSlice({
  name: 'newtour',
  initialState:{
    tour:null
  },
  reducers: {
    addTour: (state,action)=>{
        state.tour=action.payload
    },
    clearTour: (state)=>{
        state.tour=null
    }
  },
})

export const { addTour , clearTour} = newtourSlice.actions

export const selectUser = (state) => state.tour

export default newtourSlice.reducer