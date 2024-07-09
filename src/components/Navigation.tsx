import { useTimerContext } from "../store/TimerContextProvider";
import Link from "./Link";

export default function Navigation() {
  const { timers } = useTimerContext();

  return (
    <nav>
      <ul className="flex items-center justify-center bg-c-800 rounded-full p-2">
        {timers.map((timer, index) => (
          <Link key={index} timer={timer} index={index} />
        ))}
      </ul>
    </nav>
  );
}
