import "./Global.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/wish" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
