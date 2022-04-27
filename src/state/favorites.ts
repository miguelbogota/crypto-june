import { createSlice } from '@reduxjs/toolkit';

const initialState = [] as string[];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});

export default favoritesSlice.reducer;
