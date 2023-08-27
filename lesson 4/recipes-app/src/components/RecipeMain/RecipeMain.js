import './RecipeMain.css';
import SearchForm from '../SearchForm/SearchForm';
import RecipesList from '../RecipesList/RecipesList';
import { useState } from 'react';

export default function RecipeMain({ setQuery, recipes }) {
    const [search, setSearch] = useState('')
    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
        <>
            <SearchForm value={search} setSearch={setSearch} onSubmit={getSearch} />
            <RecipesList recipes={recipes} />
        </>
    )
}