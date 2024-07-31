import { useSelector } from "react-redux";
import formatTimer from "../utils/formatTimer";
import Circle from "./Circle";
import StatusButton from "./StatusButton";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { toogleIsRunning, updateCurrentTimer } from "../store/timerSlice";
import { useDispatch } from "react-redux";

const remainingPercentage = (
  remainingTime: number,
  totalTime: number
): number => {
  return (remainingTime / totalTime) * 100;
};

export default function Timer() {
  const { timers, currentTimerIndex, isRunning } = useSelector(
    (state: RootState) => state.timer
  );
  const { color } = useSelector((state: RootState) => state.appearance);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      dispatch(updateCurrentTimer());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timers, currentTimerIndex, isRunning, dispatch]);

  useEffect(() => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        dispatch(toogleIsRunning());
      }
    };

    document.addEventListener("keydown", eventListener);

    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  }, [dispatch]);

  return (
    <div>
      <div className="timer">
        <div className="text-center text-c-700 z-10">
          <h1>{formatTimer(timers[currentTimerIndex].duration)}</h1>
          <StatusButton />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle
            size={340}
            stroke={10}
            percentage={remainingPercentage(
              timers[currentTimerIndex].duration,
              timers[currentTimerIndex].totalDuration
            )}
            isRunning={false}
          />
        </div>
      </div>
    </div>
  );
}
