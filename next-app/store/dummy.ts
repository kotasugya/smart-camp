import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DummyState {
  name: string;
}

export const initialState: DummyState = {
  name: 'test',
};

export const reducers = {
  updateDummyStateAction: (state: DummyState, action: PayloadAction<DummyState>) => ({
    ...state,
    name: action.payload.name,
  }),
  clearDummyStateAction: (state: DummyState): DummyState => ({
    ...state,
    name: '',
  }),
};

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState,
  reducers,
});

export const DummyAction = DummySlice.actions;
