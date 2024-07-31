import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./timerSlice";
import appearanceSlice from "./appearanceSlice";

export const store = configureStore({
  reducer: {
    timer: timerSlice,
    appearance: appearanceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
