import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>Publishers</NavLink>
            <div className={classes.right}>
                <NavLink className={classes.active} to="/signup">Sign up</NavLink>
                <NavLink to="/signin">Sign in</NavLink>
            </div>
        </header>
    );
}

export default Header;