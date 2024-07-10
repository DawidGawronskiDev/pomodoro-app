import { type Timer } from "../store/TimerContextProvider";

const timers: Timer[] = [
  {
    name: "Pomodoro",
    totalDuration: 1500000,
    duration: 1500000,
  },
  {
    name: "Short Break",
    totalDuration: 60000,
    duration: 60000,
  },
  {
    name: "Long Break",
    totalDuration: 900000,
    duration: 900000,
  },
];

export default timers;
