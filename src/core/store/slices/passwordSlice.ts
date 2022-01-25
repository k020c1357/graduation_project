import { createSlice } from "@reduxjs/toolkit";
import type { PasswordState } from "../../types/reducers";

export const passwordSlice = createSlice({
  name: "password",
  initialState: { value: "" },
  reducers: {},
});
