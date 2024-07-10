import { Timer } from "../store/TimerContextProvider";
import millisecondsToMinutes from "../utils/millisecondsToMinutes";

import IconArrowUp from "../assets/icon-arrow-up.svg";
import IconArrowDown from "../assets/icon-arrow-down.svg";
import { useRef } from "react";

type FormProps = {
  timer: Timer;
  onChange: (name: string, value: number) => void;
  increase: (name: string, duration: number) => void;
  decrease: (name: string, duration: number) => void;
};

export default function Form({
  timer,
  onChange,
  increase,
  decrease,
}: FormProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <li>
      <div className="grid gap-2">
        <label htmlFor={timer.name} className="text-xs font-bold text-c-800/40">
          {timer.name}
        </label>
        <div className="bg-c-700 p-4 rounded-lg flex items-center">
          <input
            ref={ref}
            type="number"
            min={1}
            id={timer.name}
            name={timer.name}
            inputMode="numeric"
            value={millisecondsToMinutes(timer.totalDuration)}
            onChange={(e) => onChange(timer.name, +e.target.value * 1000 * 60)}
            required
            className="bg-transparent text-sm font-bold w-full"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <button>
              <img
                src={IconArrowUp}
                alt=""
                onClick={() => increase(timer.name, timer.totalDuration)}
              />
            </button>
            <button>
              <img
                src={IconArrowDown}
                alt=""
                onClick={() => decrease(timer.name, timer.totalDuration)}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
