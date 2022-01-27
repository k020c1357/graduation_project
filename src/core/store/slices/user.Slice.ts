import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserState } from '../../types/reducers';

const initialState: UserState = {
  hasAccess: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
