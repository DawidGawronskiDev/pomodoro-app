import { type Timer } from "../types/timer";

const timers: Timer[] = [
  {
    name: "Pomodoro",
    totalDuration: 1500000,
    duration: 1500000,
  },
  {
    name: "Short Break",
    totalDuration: 10000,
    duration: 10000,
  },
  {
    name: "Long Break",
    totalDuration: 900000,
    duration: 900000,
  },
];

export default timers;
