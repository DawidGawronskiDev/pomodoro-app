import { useRef } from "react";
import Colors from "./Colors";
import Fonts from "./Fonts";

import IconSettings from "../assets/icon-settings.svg";
import IconClose from "../assets/icon-close.svg";

const Settings = () => {
  const ref = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button onClick={() => ref.current?.showModal()} className="rounded-full">
        <img src={IconSettings} alt="Settings" />
      </button>
      <dialog ref={ref} className="p-8 rounded-3xl w-full max-w-lg">
        <div className="flex items-center justify-between">
          <h2>Settings</h2>
          <button onClick={ref.current?.close()}>
            <img src={IconClose} alt="Close" />
          </button>
        </div>
        <Fonts />
        <Colors />
      </dialog>
    </>
  );
};

export default Settings;
