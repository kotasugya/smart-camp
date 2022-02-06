import { createSlice } from '@reduxjs/toolkit';

import { reducers } from '@/store/reducers/dummy';
import { initialState } from '@/store/states/dummy';

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState,
  reducers,
});
