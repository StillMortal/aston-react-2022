import Cards from "../Profile/Cards/Cards";

function Favorites() {
    if (!localStorage.getItem("signUp")) {
        window.location.replace("/signin")
    }

    return (
        <Cards favorites={true}/>
    );
}

export default Favorites