import classes from "./AuthorizedHeader.module.css";
import {NavLink} from "react-router-dom";

function AuthorizedHeader(){
    const favorites=()=>{
        window.location.replace("/favorites")
    }

    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.replace("/")
    }
    const deleteAccount=()=>{
        localStorage.clear()
        window.location.replace("/")
    }

    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>Publishers</NavLink>
            <div className={classes.right}>
                Welcome {localStorage.getItem('name')} &nbsp;
                <button onClick={favorites} className={classes.favorites}>Favorites</button>
                <button onClick={logout} className={classes.logout}>LogOut</button>
                <button onClick={deleteAccount} className={classes.delete}>Delete</button>
            </div>
        </header>
    );
}
export default AuthorizedHeader;