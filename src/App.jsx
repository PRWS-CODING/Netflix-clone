import { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DisclaimerBanner from "./components/DisclaimerBanner/DisclaimerBanner";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isGuest = localStorage.getItem("netflix_guest_mode") === "true";
      if (user || isGuest) {
        if (window.location.pathname === "/login") {
          navigate("/");
        }
      } else {
        if (window.location.pathname !== "/login") {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <DisclaimerBanner />
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
