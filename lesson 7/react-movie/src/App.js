import './Global.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
