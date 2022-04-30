import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { CoinGeckoMarkets } from '@app-models/coin-gecko-response';

const summarySlice = createSlice({
  name: 'summary',
  initialState: {
    value: null as CoinGeckoMarkets | null,
  },
  reducers: {
    openSummary: (state, action: PayloadAction<CoinGeckoMarkets>) => {
      state.value = action.payload;
    },
    closeSummary: state => {
      state.value = null;
    },
  },
});

export const { openSummary, closeSummary } = summarySlice.actions;

export const useSummary = () => useSelector((state: RootState) => state.summary.value);

export default summarySlice.reducer;
