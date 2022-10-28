import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios' 

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const getCoursesSlice = createAsyncThunk('api/courses', async()=>{
  const response = await axios.get(`api/courses`)
  return response.data
}) 

const get_courses = createSlice({
    name: 'get_courses',
    initialState,
    reducers: {
    getCoursesSlice(state, action) {
        const { courses } = action.payload;
        state.courses = courses;
      },
    //   resetOneModel() {
    //     return {
    //       ...initialState
    //     }
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(getCoursesSlice.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getCoursesSlice.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // A fetched posts to the array;
          state.data = [];
          state.data = state.data.concat(action.payload)
        })
        .addCase(getCoursesSlice.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
          console.log(action.error.message)
        })
      }
  });

// export const { resetOneModel } = get_constats.actions;
export const reducer = get_courses.reducer;
export const courses = (state) => state?.get_courses?.data[0]
export default get_courses;