import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
