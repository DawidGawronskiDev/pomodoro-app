import Logo from "./components/Logo";
import Timer from "./components/Timer";
import TimerContextProvider from "./store/TimerContextProvider";

export default function App() {
  return (
    <TimerContextProvider>
      <main>
        <Logo />
        <Timer />
      </main>
    </TimerContextProvider>
  );
}
