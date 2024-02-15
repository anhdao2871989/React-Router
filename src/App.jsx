import { Routes, Route, Link } from "react-router-dom";
import Red from "./component/Red.jsx";
import Blue from "./component/Blue.jsx";
import Home from "./component/Home.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;