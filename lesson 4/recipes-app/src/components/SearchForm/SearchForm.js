import './SearchForm.css';
import { useState } from 'react';

export default function SearchForm({ value, setSearch, onSubmit }) {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    return (
        <form onSubmit={onSubmit} className="search-form">
            <input type="text" className="search-bar" value={value} onChange={(e) => {
                setButtonDisabled(e.target.value ? false : true)
                setSearch(e.target.value)
            }}
                placeholder='Food which is recipe do you want?' />
            <button className="search-button" disabled={buttonDisabled}>Search</button>
        </form>
    )
}