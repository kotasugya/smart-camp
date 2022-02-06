import { PayloadAction } from '@reduxjs/toolkit';

import { DummyState } from '@/store/states/dummy';

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
