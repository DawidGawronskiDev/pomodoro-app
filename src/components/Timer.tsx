import { useEffect, useRef, useState } from "react";
import { useTimerContext } from "../store/TimerContextProvider";
import formatTimer from "../utils/formatTimer";
import Circle from "./Circle";
import useKeyHandler from "../hooks/useKeyHandler";

const remainingPercentage = (
  remainingTime: number,
  totalTime: number
): number => {
  return (remainingTime / totalTime) * 100;
};

export default function Timer() {
  const { currentTimerIndex, timers, isRunning, toggleTimer, updateTimer } =
    useTimerContext();

  const totalDuration = timers[currentTimerIndex]?.totalDuration || 0;
  const [duration, setDuration] = useState(timers[currentTimerIndex].duration);

  const durationRef = useRef(duration);
  durationRef.current = duration;

  useEffect(() => {
    setDuration(timers[currentTimerIndex].duration);
  }, [currentTimerIndex, timers]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && durationRef.current > 0) {
        const newDuration = Math.max(durationRef.current - 1000, 0);
        setDuration(newDuration);
        durationRef.current = newDuration;
        updateTimer(currentTimerIndex, newDuration);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, currentTimerIndex, updateTimer]);

  useKeyHandler("Space", toggleTimer);

  return (
    <div>
      <div className="timer">
        <h1 className="text-c-100">{formatTimer(duration)}</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle
            size={340}
            stroke={10}
            percentage={remainingPercentage(duration, totalDuration)}
            color="var(--c-100)"
          />
        </div>
      </div>
    </div>
  );
}
