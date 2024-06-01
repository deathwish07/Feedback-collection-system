import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
// import MyFeedback from "./pages/myfeedback";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { useAuthContext } from "./context/authContext.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
