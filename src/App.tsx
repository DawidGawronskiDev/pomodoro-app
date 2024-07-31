import { Provider } from "react-redux";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <main
        style={{ fontFamily: "var(--f-main)" }}
        className="h-screen grid place-content-center place-items-center gap-16"
      >
        <Logo />
        <Navigation />
        <Timer />
      </main>
      <Settings />
    </Provider>
  );
}
