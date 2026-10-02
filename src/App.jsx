import { useState } from "react";
import "./App.css";
import LandingPage from "./page/LandingPage";
import Header from "../../../extra/components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <LandingPage/>
    </>
  );
}

export default App;
