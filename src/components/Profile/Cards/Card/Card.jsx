import classes from "./Card.module.css";
import {NavLink} from "react-router-dom";

function Card(props) {
    return (
        <div className={classes.clickableCard}>
            <div className={classes.articleBody}>
                <h2>{props.publisher.name}</h2>
                <img src={props.publisher.image_background}/>
                <NavLink to="/readmore" state={{from: props.publisher}} className={classes.readMore}>Read more</NavLink>
            </div>
        </div>
    );
}

export default Card