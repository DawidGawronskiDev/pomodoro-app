import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import timers from "../lib/timers";
import formatTimer from "../utils/formatTimer";

const initialState = {
  initialTimers: timers,
  timers,
  currentTimerIndex: 0,
  isRunning: false,
  status: "start",
};

const timerSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    updateCurrentTimer: (state, action: PayloadAction<number>) => {
      const currentIndex = state.currentTimerIndex;

      document.title = `${state.timers[currentIndex].name} ${formatTimer(
        state.timers[currentIndex].duration
      )}`;

      if (state.timers[currentIndex].duration <= 0) {
        state.timers[currentIndex].duration = 0;
        state.isRunning = false;
        state.status = "restart";
        return;
      }

      state.timers[currentIndex].duration -= action.payload;
    },
    updateCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentTimerIndex = action.payload;
    },
    toogleIsRunning: (state) => {
      if (state.timers[state.currentTimerIndex].duration <= 0) {
        return;
      }
      state.isRunning = state.isRunning ? false : true;
      state.status = state.isRunning ? "stop" : "start";
    },
    restartTimer: (state) => {
      state.timers[state.currentTimerIndex].duration =
        state.timers[state.currentTimerIndex].totalDuration;
      state.status = "start";
    },
  },
});

export const {
  updateCurrentTimer,
  updateCurrentIndex,
  toogleIsRunning,
  restartTimer,
} = timerSlice.actions;

export default timerSlice.reducer;
