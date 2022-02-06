import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { DummySlice } from '@/store/slices/dummy';

const reducer = combineReducers({
  [DummySlice.name]: DummySlice.reducer,
});

// configureStore helps you createStore with less fuss
export const store = configureStore({ reducer });

export const useAppDispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
