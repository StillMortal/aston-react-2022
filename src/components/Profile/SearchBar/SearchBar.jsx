import classes from "./SearchBar.module.css";
import useDebounce from "./use-debounce"
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm).then(results => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <div className={classes.search}>
            <input
                type="number"
                className={classes.searchTerm}
                placeholder="What page do you need?"
                onChange={e => setSearchTerm(e.target.value)}
            />
            {
                !isSearching
                    ? <NavLink to="/search" state={{from: results}} className={classes.searchButton}>Search</NavLink>
                    : <div className={classes.searching}>Searching ...</div>
            }
        </div>
    );
}

function searchCharacters(search) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f380e7a6famshda6bed0dbca52e4p1a7ea4jsnbef4c3e154ac',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    const apiKey = 'aee197aa8504457b8e0ec37e32515d78'
    const queryString = `key=${apiKey}&page=${search}`;

    return fetch(
        `https://rawg-video-games-database.p.rapidapi.com/publishers?${queryString}`, options)
        .then(r => r.json())
        .then(r => r.results)
        .catch(error => {
            console.log(`https://rawg-video-games-database.p.rapidapi.com/publishers?${queryString}`)
            console.error(error);
            return [];
        });
}

export default SearchBar