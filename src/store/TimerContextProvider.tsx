import { createContext, useContext, useState, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type InitialState = {
  currentTimerIndex: number;
  timers: Timer[];
};

type TimerContextType = {
  currentTimerIndex: number;
  timers: Timer[];
};

type TimerContextProviderProps = {
  children: ReactNode;
};

const initialState: InitialState = {
  currentTimerIndex: 0,
  timers: [
    {
      name: "Pomodoro",
      duration: 1500000,
    },
    {
      name: "Short Break",
      duration: 300000,
    },
    {
      name: "Long Break",
      duration: 900000,
    },
  ],
};

const TimerContext = createContext<TimerContextType>({
  currentTimerIndex: 0,
  timers: [],
});

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [currentTimerIndex, setCurrentTimerIndex] = useState<number>(
    initialState.currentTimerIndex
  );
  const [timers, setTimers] = useState<Timer[]>(initialState.timers);

  const contextValue = {
    currentTimerIndex,
    timers,
  };

  return (
    <TimerContext.Provider value={contextValue}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimerContext() {
  return useContext(TimerContext);
}
