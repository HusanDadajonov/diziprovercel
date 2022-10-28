import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios' 

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const getPortfoliosSlice = createAsyncThunk('api/portfolios', async()=>{
  const response = await axios.get(`api/portfolios`)
  return response.data
}) 

const get_portfolios = createSlice({
    name: 'get_portfolios',
    initialState,
    reducers: {
      getPortfoliosSlice(state, action) {
        const { portfolios } = action.payload;
        state.portfolios = portfolios;
      },
    //   resetOneModel() {
    //     return {
    //       ...initialState
    //     }
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(getPortfoliosSlice.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getPortfoliosSlice.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // A fetched posts to the array;
          state.data = [];
          state.data = state.data.concat(action.payload)
        })
        .addCase(getPortfoliosSlice.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
          console.log(action.error.message)
        })
      }
  });

// export const { resetOneModel } = get_constats.actions;
export const reducer = get_portfolios.reducer;
export const portfolios = (state) => state?.get_portfolios?.data[0]
export default get_portfolios;