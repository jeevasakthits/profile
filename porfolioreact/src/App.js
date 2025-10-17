import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Resume from "./pages/Resume";
import Self from "./pages/Self";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/self" element={<Self />} />
      </Routes>
    </div>
  );
}

export default App;
