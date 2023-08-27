import './SearchForm.css';

export default function SearchForm({value, setSearch, onSubmit}) {
    return (
        <form onSubmit={onSubmit} className="search-form">
            <input type="text" className="search-bar" value={value} onChange={(e) => { setSearch(e.target.value) }} placeholder='Food which is recipe do you want?'/>
            <button className="search-button">Search</button>
        </form>
    )
}