import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;