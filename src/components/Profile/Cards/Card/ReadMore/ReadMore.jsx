import {useLocation} from "react-router-dom";

function ReadMore() {
    const location = useLocation();
    const {state} = location;

    const handleClick = () => {
        if (localStorage.getItem("signUp")) {
            localStorage.setItem(state.from.id, state.from.id)
            alert("Card added successfully!!")
        } else {
            alert("Please sign in")
        }
    }

    return (
        <div>
            <h1>{state.from.name}</h1>
            <p>{state.from.name} ID is {state.from.id}. The company has created {state.from.games_count} games.</p>
            <button onClick={handleClick}>Add to favorites</button>
        </div>
    );
}

export default ReadMore