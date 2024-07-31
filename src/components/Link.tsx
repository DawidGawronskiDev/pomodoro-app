import clsx from "clsx";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCurrentIndex } from "../store/timerSlice";
import { type Timer } from "../types/timer";

type LinkProps = {
  timer: Timer;
  index: number;
};

export default function Link({ timer, index }: LinkProps) {
  const { currentTimerIndex } = useSelector((state: RootState) => state.timer);
  const dispach = useDispatch();

  return (
    <li>
      <button
        onClick={() => dispach(updateCurrentIndex(index))}
        style={{
          backgroundColor:
            currentTimerIndex === index ? "var(--c-main)" : undefined,
        }}
        className={clsx("px-6 py-4 rounded-full transition-colors", {
          "text-c-400 hover:text-c-700": currentTimerIndex !== index,
        })}
      >
        <p className="body-one">{timer.name}</p>
      </button>
    </li>
  );
}
