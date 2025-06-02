import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { Dashboard } from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/SignIn/ForgotPassword";
import TemplateEditor from "./components/TemplateEditor";
import FirstFooter from "./components/GetStarted/FirstFooter";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/TemplateEditor" element={<TemplateEditor />} />
      <Route path="/FirstFooter" element={<FirstFooter />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/Terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
