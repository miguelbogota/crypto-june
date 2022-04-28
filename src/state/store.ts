import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Reducers
import favorites from './favorites';
import theme from './theme';

/** Persisted reducer. */
const persistedReducer = persistReducer(
  { key: 'root-state', storage: AsyncStorage },
  combineReducers({
    // Add your reducers here.
    favorites,
    theme,
  }),
);

/** Configured store for manage redux state. */
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

/** App dispatch type. */
export type AppDispatch = typeof store.dispatch;

/** Root state type. */
export type RootState = ReturnType<typeof store.getState>;

/** App thunk type. */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
