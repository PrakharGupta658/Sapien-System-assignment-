import "./App.css";
import { NextUIProvider} from "@nextui-org/react";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <NextUIProvider>
      <Header/>
        <Dashboard />
      </NextUIProvider>
    </>
  );
}

export default App;
