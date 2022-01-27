import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserPasswordState } from '../../types/reducers';

const initialState: UserPasswordState = {
  password: null,
};

export const userPasswordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
});
