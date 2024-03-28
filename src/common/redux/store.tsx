/** @format */

import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../../layouts/header/common/redux/headerSlice";
// ...

export const store = configureStore({
  reducer: {
    headers: headerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
