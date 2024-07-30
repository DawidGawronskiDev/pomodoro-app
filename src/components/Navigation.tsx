import { useSelector } from "react-redux";
import Link from "./Link";
import { RootState } from "../store/store";

export default function Navigation() {
  const { timers } = useSelector((state: RootState) => state.timer);

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
