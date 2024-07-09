import { useEffect, useState } from "react";
import { useTimerContext } from "../store/TimerContextProvider";
import formatTimer from "../utils/formatTimer";
import Circle from "./Circle";

const remainingPercentage = (
  remainingTime: number,
  totalTime: number
): number => {
  return (remainingTime / totalTime) * 100;
};

export default function Timer() {
  const { currentTimerIndex, timers, isRunning, toggleTimer, updateTimer } =
    useTimerContext();
  const totalDuration = timers[currentTimerIndex]?.duration || 0;
  const [duration, setDuration] = useState(totalDuration);

  useEffect(() => {
    setDuration(totalDuration);
  }, [currentTimerIndex, totalDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && duration > 0) {
        setDuration((prev) => {
          const newDuration = Math.max(prev - 1000, 0);
          updateTimer(currentTimerIndex, newDuration);
          return newDuration;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, currentTimerIndex, duration, updateTimer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        toggleTimer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTimer]);

  return (
    <div className="h-screen grid place-content-center">
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
