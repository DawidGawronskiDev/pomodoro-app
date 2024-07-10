import { useRef, useState } from "react";

import IconClose from "../assets/icon-close.svg";
import Form from "./Form";
import timers from "../lib/timers";

export default function Settings() {
  const [formData, setFormData] = useState({
    timers: timers,
  });

  console.log(formData.timers[1]);

  const handleTimerDuration = (name: string, value: number) => {
    const updatedTimers = formData.timers.map((timer) => {
      return timer.name === name ? { ...timer, totalDuration: value } : timer;
    });

    setFormData((prev) => ({ ...prev, timers: updatedTimers }));
  };

  const increaseTimerDuration = (name: string, duration: number) => {
    const updatedTimers = formData.timers.map((timer) => {
      return timer.name === name
        ? { ...timer, totalDuration: duration + 60000 }
        : timer;
    });

    console.log(updatedTimers);

    setFormData((prev) => ({ ...prev, timers: updatedTimers }));
  };

  const decreaseTimerDuration = (name: string, duration: number) => {
    if (duration <= 60000) {
      return;
    }

    const updatedTimers = formData.timers.map((timer) => {
      return timer.name === name
        ? { ...timer, totalDuration: duration - 60000 }
        : timer;
    });

    setFormData((prev) => ({ ...prev, timers: updatedTimers }));
  };

  const ref = useRef<HTMLDialogElement | null>(null);

  const handleClose = () => {
    ref.current?.close();
  };

  ref.current?.showModal();

  return (
    <dialog ref={ref} className="w-11/12 max-w-xl rounded-3xl p-8">
      <div className="flex items-center justify-between">
        <h2>Settings</h2>
        <button onClick={handleClose}>
          <img src={IconClose} alt="" />
        </button>
      </div>
      <div>
        <h3>Time (minutes)</h3>
        <ul className="flex items-center justify-between gap-5">
          {formData.timers.map((timer, index) => (
            <Form
              key={index}
              timer={timer}
              onChange={handleTimerDuration}
              increase={increaseTimerDuration}
              decrease={decreaseTimerDuration}
            />
          ))}
        </ul>
      </div>
    </dialog>
  );
}
