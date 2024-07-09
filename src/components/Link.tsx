import clsx from "clsx";
import { useTimerContext, type Timer } from "../store/TimerContextProvider";

type LinkProps = {
  timer: Timer;
  index: number;
};

export default function Link({ timer, index }: LinkProps) {
  const { currentTimerIndex, handleCurrentTimerIndex } = useTimerContext();

  return (
    <li>
      <button
        onClick={() => handleCurrentTimerIndex(index)}
        className={clsx("px-6 py-4 rounded-full", {
          "bg-c-100": currentTimerIndex === index,
          "text-c-400 hover:text-c-700": currentTimerIndex !== index,
        })}
      >
        <p className="body-one">{timer.name}</p>
      </button>
    </li>
  );
}
