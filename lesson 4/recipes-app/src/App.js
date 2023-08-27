import { useState, useEffect } from 'react';
import './App.css';
import RecipeMain from './components/RecipeMain/RecipeMain';

function App() {

  const APP_ID = 'be63a186'
  const APP_KEY = '3ae6f619d6a871bfaeeef0a12b982b5c'

  const [recipes, setResipes] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories-591-722&health-alcohol-free`)
    const data = await response.json()
    setResipes(data.hits)
  }

  return (
    <div className="App">
      <RecipeMain setQuery={setQuery} recipes={recipes} />
    </div>
  );
}

export default App;