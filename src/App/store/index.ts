import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer, actions as storeActions } from './slices';

const rootReducer = combineReducers({ ...reducer });

export const actions = { ...storeActions };

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
