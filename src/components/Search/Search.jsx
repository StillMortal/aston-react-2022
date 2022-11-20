import {useLocation} from "react-router-dom";
import classes from "../Profile/SearchBar/SearchBar.module.css";
import Card from "../Profile/Cards/Card/Card";

function Search() {
    const location = useLocation();
    const {state} = location;

    return (
        <div>
            <h2>The answer to the search query:</h2>
            <div className={classes.cards}>
                {state.from.map(publisher => <Card publisher={publisher}/>)}
            </div>
        </div>
    );
}

export default Search