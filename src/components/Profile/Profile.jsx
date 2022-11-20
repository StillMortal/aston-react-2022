import classes from "./Profile.module.css"
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";

const Profile = () => {
    return (
        <div className={classes.content}>
        <SearchBar />
        <Cards />


    </div>
    );
}


export default Profile;