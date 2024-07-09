import { useEffect } from "react";

type KeyHandler = (event: KeyboardEvent) => void;

const useKeyHandler = (key: string, callback: KeyHandler): void => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === key) {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeyHandler;
