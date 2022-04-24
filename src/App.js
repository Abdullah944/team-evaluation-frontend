import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
//? Pages:
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
//? Nav
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App center">
      {/* HOME ICON */}
      <Link to={"/"}>
        <div style={{ fontSize: 100 }}>
          <BsFillHouseDoorFill />
        </div>
      </Link>
      {/* NAV BAR */}
      <NavBar />
      {/* PAGES... */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<AdminPage />} />
        {/* AUTH */}
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        {/* PROJECT DETAIL: */}
        <Route
          path="/ProjectDetail/:projectId"
          element={<ProjectDetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
