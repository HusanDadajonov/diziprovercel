import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ThemStatus: true  ,
  }

export const themeSlice = createSlice({
    name:"themeStatus",
    initialState,
    reducers: {
        ChangeStatus: (state,action)=> {
            state.ThemStatus = action.payload;
        }
    },

})
export const reducer = themeSlice.reducer;
export const { ChangeStatus } = themeSlice.actions
export default themeSlice
