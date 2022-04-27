import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const initialState = [] as string[];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const useFavorites = () => useSelector((state: RootState) => state.favorites);

export default favoritesSlice.reducer;
