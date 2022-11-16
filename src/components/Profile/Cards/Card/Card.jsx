import classes from "./Card.module.css";

function Card(props) {
    return (
        <a href="src/components/Profile/Profile#" className={classes.clickableCard}>
            <div className={classes.articleBody}>
                <h2>{props.publisher}</h2>
                <div className={classes.readMore}>Read more</div>
            </div>
        </a>
    );
}

export default Card