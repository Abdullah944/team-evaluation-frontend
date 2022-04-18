import "./App.css";
import { Routes, Route } from "react-router-dom";
//? Pages:
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import SemesterListPage from "./pages/SemesterListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* AUTH */}
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        {/* SEMESTER */}
        <Route path="/SemesterListPage" element={<SemesterListPage />} />
      </Routes>
    </div>
  );
}

export default App;
