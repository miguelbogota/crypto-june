import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favorites from './favorites';

/** Configured store for manage redux state. */
const store = configureStore({
  reducer: {
    favorites,
  },
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
