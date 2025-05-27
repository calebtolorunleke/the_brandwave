import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
