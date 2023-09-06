import Header from "./components/Header/Header";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/sales" element={<HomePage />} />
        <Route path="/guide" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
