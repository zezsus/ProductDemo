/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IHeaderState } from "../interface/header.interface";

const initialState: IHeaderState = {
  isSearch: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setShowSearch: (state, action) => {
      state.isSearch = action.payload;
    },
  },
});

export const { setShowSearch } = headerSlice.actions;

export default headerSlice.reducer;
