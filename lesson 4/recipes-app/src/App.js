import { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/Recipe/Recipe';

function App() {

  const APP_ID = 'be63a186'
  const APP_KEY = '3ae6f619d6a871bfaeeef0a12b982b5c'

  const [recipes, setResipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories-591-722&health-alcohol-free`)
    const data = await response.json()
    setResipes(data.hits)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={(e) => {setSearch(e.target.value)}} />
        <button className="search-button">Seatch</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;