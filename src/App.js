import "./App.css";
import { Routes, Route } from "react-router-dom";
//? Pages:
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import SemesterList from "./components/semester/SemesterList";

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
        <Route path="/SemesterList" element={<SemesterList />} />
      </Routes>
    </div>
  );
}

export default App;
