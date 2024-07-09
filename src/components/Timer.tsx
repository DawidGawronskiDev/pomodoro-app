import { useEffect, useState } from "react";
import { useTimerContext } from "../store/TimerContextProvider";
import formatTimer from "../utils/formatTimer";

export default function Timer() {
  const { currentTimerIndex, timers } = useTimerContext();
  const [duration, setDuration] = useState(timers[currentTimerIndex].duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen grid place-content-center">
      <div className="timer">
        <h1 className="text-c-100">{formatTimer(duration)}</h1>
      </div>
    </div>
  );
}
