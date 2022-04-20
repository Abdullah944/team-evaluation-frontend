import "./App.css";
import { Routes, Route } from "react-router-dom";
//? Pages:
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
//? Nav
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App center">
      <NavBar />
      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<AdminPage />} />
        {/* AUTH */}
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
