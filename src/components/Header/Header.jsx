import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
        <a href="src/components/Header/Header#default" className={classes.logo}>Publishers</a>
        <div className={classes.right}>
            <a className={classes.active} href="src/components/Header/Header#Sign up">Sign up</a>
            <a href="src/components/Header/Header#Sign in">Sign in</a>
        </div>
    </header>
    );
}

export default Header;