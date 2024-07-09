import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Timer from "./components/Timer";
import TimerContextProvider from "./store/TimerContextProvider";

export default function App() {
  return (
    <TimerContextProvider>
      <main className="h-screen grid place-content-center place-items-center gap-16 font-kumbh">
        <Logo />
        <Navigation />
        <Timer />
      </main>
    </TimerContextProvider>
  );
}
