import { useTimerContext } from "../store/TimerContextProvider";

export default function StatusButton() {
  const { status, handleStatus } = useTimerContext();

  return (
    <button onClick={handleStatus}>
      <h4>{status}</h4>
    </button>
  );
}
