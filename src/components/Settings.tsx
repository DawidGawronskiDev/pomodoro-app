import { useRef } from "react";
import Colors from "./Colors";
import Fonts from "./Fonts";

const Settings = () => {
  const ref = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button onClick={() => ref.current?.showModal()}>Open</button>
      <dialog ref={ref} className="p-8 rounded-3xl w-full max-w-lg">
        <h2>Settings</h2>
        <Fonts />
        <Colors />
      </dialog>
    </>
  );
};

export default Settings;
