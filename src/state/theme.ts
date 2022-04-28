import { Appearance } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native-ui-lib';
import { RootState } from './store';

export type Theme = 'light' | 'dark';
export type ThemeWithSystem = Theme | 'system';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'system' as ThemeWithSystem,
    system: Appearance.getColorScheme() ?? 'light',
  },
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeWithSystem>) => {
      state.value = action.payload;
      Colors.setScheme(state.value === 'system' ? state.system : state.value);
    },
    setSystemTheme: (state, action: PayloadAction<Theme>) => {
      state.system = action.payload;
      Colors.setScheme(state.value === 'system' ? state.system : state.value);
    },
  },
});

export const { setTheme, setSystemTheme } = themeSlice.actions;

export const useTheme = () =>
  useSelector((state: RootState) => {
    // Adds theme inverted.
    const invertedSystem = state.theme.system === 'dark' ? 'light' : 'dark';
    const invertedValue = state.theme.value === 'dark' ? 'light' : 'dark';
    const inverted = state.theme.value === 'system' ? invertedSystem : invertedValue;

    return {
      ...state.theme,
      inverted: inverted as Theme,
    };
  });

export default themeSlice.reducer;
