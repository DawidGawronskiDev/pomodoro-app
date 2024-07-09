import { useEffect, useState } from "react";
import { useTimerContext } from "../store/TimerContextProvider";

export default function Timer() {
  const { currentTimerIndex, timers } = useTimerContext();
  const [duration, setDuration] = useState(timers[currentTimerIndex].duration);

  const formatTimer = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);

    const addZero = (n: number) => {
      return n.toString().length === 1 ? 0 + n.toString() : n;
    };

    return `${addZero(minutes)}:${addZero(seconds)}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{formatTimer(duration)}</div>;
}
