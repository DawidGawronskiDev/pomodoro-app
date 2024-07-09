import Circle from "./components/Circle";
import Logo from "./components/Logo";
import Timer from "./components/Timer";
import TimerContextProvider from "./store/TimerContextProvider";

export default function App() {
  return (
    <TimerContextProvider>
      <main className="font-mono h-screen grid place-content-center">
        {/* <Logo /> */}
        <Timer />
      </main>
    </TimerContextProvider>
  );
}
