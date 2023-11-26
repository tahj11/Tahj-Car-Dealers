import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Build from "./pages/Build";
import X5 from "./pages/X5";
import Aventador from "./pages/Aventador";
import Huracan from "./pages/Huracan";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/build" element={<Build />} />
        <Route path="/X5" element={<X5 />} />
        <Route path="/aventador" element={<Aventador />} />
        <Route path="/huracan" element={<Huracan />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
