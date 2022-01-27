import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    searchReducer: (state, action) => {
      return (state.search = action.payload.search);
    },
  },
});
