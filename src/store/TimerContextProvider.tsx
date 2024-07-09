import { createContext, useContext, useState, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type InitialState = {
  currentTimerIndex: number;
  timers: Timer[];
  isRunning: boolean;
};

type TimerContextType = {
  currentTimerIndex: number;
  timers: Timer[];
  isRunning: boolean;
  toggleTimer: () => void;
  updateTimer: (timerIndex: number, duration: number) => void;
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
  isRunning: false,
};

const TimerContext = createContext<TimerContextType>({
  currentTimerIndex: 0,
  timers: [],
  isRunning: false,
  toggleTimer: () => {},
  updateTimer: () => {},
});

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [currentTimerIndex, setCurrentTimerIndex] = useState<number>(
    initialState.currentTimerIndex
  );
  const [timers, setTimers] = useState<Timer[]>(initialState.timers);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const updateTimer = (timerIndex: number, duration: number) => {
    const updatedTimers = timers.map((timer, index) => {
      return index === timerIndex ? { ...timer, duration: duration } : timer;
    });

    setTimers(updatedTimers);
  };

  const contextValue = {
    currentTimerIndex,
    timers,
    isRunning,
    toggleTimer,
    updateTimer,
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
