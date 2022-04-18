import "./App.css";
import { Routes, Route } from "react-router-dom";
//? Pages:
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
