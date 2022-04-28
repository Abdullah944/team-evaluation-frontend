import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
//? Pages:
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import TeamDetailPage from "./pages/TeamDetailPage";
import ThankyouPage from "./pages/Judge/ThankyouPage";
import NotFound404Page from "./pages/NotFound404Page";
import Judge from "./pages/Judge/Judge";

function App() {
  return (
    <div className="App center">
      {/* HOME ICON */}
      <Link to={"/"}>
        <div style={{ fontSize: 100 }}>
          <BsFillHouseDoorFill />
        </div>
      </Link>

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
        {/* TEAM Detail: */}
        <Route
          path="/ProjectDetail/:projectId/:teamId"
          element={<TeamDetailPage />}
        />
        {/* EvaluationPage (project): */}
        <Route
          path="/EvaluationPage/:evaluationId/:semesterId/:projectId"
          element={<Judge />}
        />
        {/* EvaluationPage (team): */}
        <Route
          path="/EvaluationPage/:evaluationId/:semesterId/:projectId/:judgeId"
          element={<Judge />}
        />
        {/* NoteFound404Page: */}
        <Route path="/NotFound404Page" element={<NotFound404Page />} />
        {/* ThankyouPage: */}
        <Route path="/ThankyouPage" element={<ThankyouPage />} />
      </Routes>
    </div>
  );
}

export default App;
