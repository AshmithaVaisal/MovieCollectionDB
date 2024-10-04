import './search.css'

export const SearchBar = () => {
    return (
        <>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Enter a movie name"/>
                <button className="search-btn">Search</button>
            </div>
        </>
    )
}