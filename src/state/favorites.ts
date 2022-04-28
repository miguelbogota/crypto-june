import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(f => f !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const useFavorites = () => useSelector((state: RootState) => state.favorites.value);

export default favoritesSlice.reducer;
