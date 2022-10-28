import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const getTestimonialsSlice = createAsyncThunk('/api/testimonials/', async()=>{
  const response = await instance.get(`/api/testimonials/`)
  return response.data
}) 

;

const get_testimonials = createSlice({
    name: 'get_testimonials',
    initialState,
    reducers: {
    getTestimonialsSlice(state, action) {
        const { testimonials } = action.payload;
        state.testimonials = testimonials;
      },
    //   resetOneModel() {
    //     return {
    //       ...initialState
    //     }
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(getTestimonialsSlice.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getTestimonialsSlice.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // A fetched posts to the array;
          state.data = [];
          state.data = state.data.concat(action.payload)
        })
        .addCase(getTestimonialsSlice.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
          console.log(action.error.message)
        })
      }
  });

// export const { resetOneModel } = get_constats.actions;
export const reducer = get_testimonials.reducer;
export const testimonials = (state) => state?.get_testimonials?.data[0]
export default get_testimonials;