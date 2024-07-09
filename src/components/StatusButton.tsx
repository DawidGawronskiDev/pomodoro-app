import { useEffect } from "react";
import { useTimerContext } from "../store/TimerContextProvider";

type StatusButtonProps = {
  isRunning: boolean;
  duration: number;
};

export default function StatusButton({
  isRunning,
  duration,
}: StatusButtonProps) {
  const { status, updateStatus } = useTimerContext();

  useEffect(() => {
    if (isRunning) {
      updateStatus("pause");
    }
    if (!isRunning) {
      updateStatus("start");
    }
    if (!duration) {
      updateStatus("restart");
    }
  }, [isRunning, updateStatus, duration]);

  return (
    <button>
      <h4>{status}</h4>
    </button>
  );
}
