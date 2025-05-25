import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/getStarted";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
    </Routes>
  );
}

export default App;
