import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pages/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
