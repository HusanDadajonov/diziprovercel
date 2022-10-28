import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const getFaqsSlice = createAsyncThunk('api/faqs', async()=>{
  const response = await instance.get(`api/faqs`)
  return response.data
}) 

;

const get_faqs = createSlice({
    name: 'get_faqs',
    initialState,
    reducers: {
        getFaqsSlice(state, action) {
        const { faqs } = action.payload;
        state.faqs = faqs;
      },
    //   resetOneModel() {
    //     return {
    //       ...initialState
    //     }
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(getFaqsSlice.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getFaqsSlice.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // A fetched posts to the array;
          state.data = [];
          state.data = state.data.concat(action.payload)
        })
        .addCase(getFaqsSlice.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
          console.log(action.error.message)
        })
      }
  });

// export const { resetOneModel } = get_constats.actions;
export const reducer = get_faqs.reducer;
export const faqs = (state) => state?.get_faqs?.data[0]
export default get_faqs;