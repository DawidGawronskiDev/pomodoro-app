import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { restartTimer, toogleIsRunning } from "../store/timerSlice";

export default function StatusButton() {
  const { status } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(status === "restart" ? restartTimer() : toogleIsRunning());
  };

  return (
    <button onClick={handleClick}>
      <h4>{status}</h4>
    </button>
  );
}
