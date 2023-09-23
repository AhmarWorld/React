import "./Global.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wish" element={<WishListPage />} />
      </Routes>
    </div>
  );
}

export default App;
