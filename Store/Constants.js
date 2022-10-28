import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios' 

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const getConstantsSlice = createAsyncThunk('api/constants', async()=>{
  const response = await axios.get(`api/constants`)
  return response.data
}) 

const get_constats = createSlice({
    name: 'get_constats',
    initialState,
    reducers: {
      getConstantsSlice(state, action) {
        const { constants } = action.payload;
        state.constants = constants;
      },
    //   resetOneModel() {
    //     return {
    //       ...initialState
    //     }
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(getConstantsSlice.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getConstantsSlice.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // A fetched posts to the array;
          state.data = [];
          state.data = state.data.concat(action.payload)
        })
        .addCase(getConstantsSlice.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
          console.log(action.error.message)
        })
      }
  });

// export const { resetOneModel } = get_constats.actions;
export const reducer = get_constats.reducer;
export const selectOneModel = (state) => state?.get_constats?.data[0]
export default get_constats;