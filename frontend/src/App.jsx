import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicPortfolio from "./pages/PublicPortfolio";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
<Route path="/" element={<SplashScreen />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
<Route
  path="/certificates"
  element={
    <ProtectedRoute>
      <Certificates />
    </ProtectedRoute>
  }
/>
       
       <Route
  path="/projects"
  element={
    <ProtectedRoute>
      <Projects />
    </ProtectedRoute>
  }
/>
<Route
  path="/achievements"
  element={
    <ProtectedRoute>
      <Achievements />
    </ProtectedRoute>
  }
/>
        
        <Route
  path="/resume"
  element={
    <ProtectedRoute>
      <Resume />
    </ProtectedRoute>
  }
/>
<Route
  path="/portfolio"
  element={
    <ProtectedRoute>
      <Portfolio />
    </ProtectedRoute>
  }
/>
<Route
  path="/portfolio/:username"
  element={<PublicPortfolio />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;