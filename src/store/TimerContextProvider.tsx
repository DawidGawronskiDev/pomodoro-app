import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Timer = {
  name: string;
  totalDuration: number;
  duration: number;
};

export type Status = "start" | "pause" | "restart";

type InitialState = {
  currentTimerIndex: number;
  timers: Timer[];
  status: Status;
  isRunning: boolean;
};

type TimerContextType = {
  currentTimerIndex: number;
  timers: Timer[];
  status: Status;
  isRunning: boolean;
  stopTimer: () => void;
  toggleTimer: () => void;
  updateTimer: (timerIndex: number, duration: number) => void;
  updateStatus: (status: Status) => void;
  handleStatus: () => void;
  handleCurrentTimerIndex: (index: number) => void;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

const initialState: InitialState = {
  currentTimerIndex: 0,
  timers: [
    {
      name: "Pomodoro",
      totalDuration: 1500000,
      duration: 1500000,
    },
    {
      name: "Short Break",
      totalDuration: 10000,
      duration: 10000,
    },
    {
      name: "Long Break",
      totalDuration: 900000,
      duration: 900000,
    },
  ],
  status: "start",
  isRunning: false,
};

const TimerContext = createContext<TimerContextType>({
  currentTimerIndex: 0,
  timers: [],
  status: "start",
  isRunning: false,
  stopTimer: () => {},
  toggleTimer: () => {},
  updateTimer: () => {},
  updateStatus: () => {},
  handleStatus: () => {},
  handleCurrentTimerIndex: () => {},
});

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [currentTimerIndex, setCurrentTimerIndex] = useState<number>(
    initialState.currentTimerIndex
  );
  const [timers, setTimers] = useState<Timer[]>(initialState.timers);
  const [status, setStatus] = useState<Status>("start");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const stopTimer = () => {
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const updateTimer = (timerIndex: number, duration: number) => {
    const updatedTimers = timers.map((timer, index) => {
      return index === timerIndex ? { ...timer, duration: duration } : timer;
    });

    setTimers(updatedTimers);
  };

  const updateStatus = (status: Status) => {
    setStatus(status);
  };

  const handleCurrentTimerIndex = (index: number) => {
    setCurrentTimerIndex(index);
    stopTimer();
  };

  const handleStatus = () => {
    switch (status) {
      case "restart": {
        updateTimer(currentTimerIndex, timers[currentTimerIndex].totalDuration);
        setIsRunning(true);
        break;
      }
      case "pause": {
        setIsRunning(false);
        break;
      }
      case "start": {
        setIsRunning(true);
      }
    }
  };

  useEffect(() => {
    if (isRunning && timers[currentTimerIndex].duration <= 0) {
      setIsRunning(false);
    }
  }, [currentTimerIndex, isRunning, timers]);

  useEffect(() => {
    if (isRunning) {
      updateStatus("pause");
    }
    if (!isRunning) {
      updateStatus("start");
    }
    if (!timers[currentTimerIndex].duration) {
      updateStatus("restart");
    }
  }, [currentTimerIndex, timers, isRunning, updateStatus]);

  const contextValue = {
    currentTimerIndex,
    timers,
    status,
    isRunning,
    stopTimer,
    toggleTimer,
    updateTimer,
    updateStatus,
    handleStatus,
    handleCurrentTimerIndex,
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
