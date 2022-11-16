import classes from "./SearchBar.module.css";

function SearchBar () {
    return (
        <div className={classes.search}>
        <input type="text" className={classes.searchTerm} placeholder="What are you looking for?"/>
        <button type="submit" className={classes.searchButton}>
            Search
        </button>
    </div>
    );
}

export default SearchBar