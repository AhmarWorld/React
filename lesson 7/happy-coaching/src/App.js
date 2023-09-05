import Header from "./components/Header/Header";
import "./global.css";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;
