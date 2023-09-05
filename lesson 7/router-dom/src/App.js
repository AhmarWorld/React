import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Abotpage from "./pages/Aboutpage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div className="app-container">
      <header className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="/about" element={<Abotpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
    </div>
  );
}

export default App;
