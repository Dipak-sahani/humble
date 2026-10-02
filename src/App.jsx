import { useState } from "react";
import "./App.css";
import LandingPage from "./page/LandingPage";
import Header from "../../../extra/components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <LandingPage/>
      <Footer/>
    </>
  );
}

export default App;
