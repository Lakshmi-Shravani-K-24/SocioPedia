import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";

function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/login" element={user ? navigate("/") : <Login />} />
      <Route path="/register" element={user ? navigate("/") : <Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
