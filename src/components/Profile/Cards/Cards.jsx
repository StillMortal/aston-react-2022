import {useEffect, useState} from 'react';
import classes from "./Cards.module.css";
import Card from "./Card/Card.jsx";

function Cards(props) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f380e7a6famshda6bed0dbca52e4p1a7ea4jsnbef4c3e154ac',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    const API = 'https://rawg-video-games-database.p.rapidapi.com/publishers?key=aee197aa8504457b8e0ec37e32515d78&page_size=40'

    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const request = fetch(API, options);
            const response = await request;
            const parsed = await response.json();
            setData(parsed);
        }

        getData();
    }, []);

    if (data) {
        // console.log(data)
        return (
            <div className={classes.cards}>
                {
                    props.favorites
                        ? data.results.map(publisher => {
                                if (localStorage.getItem(publisher.id)) {
                                    return <Card publisher={publisher}/>
                                }
                            }
                        )
                        : data.results.map(publisher => <Card publisher={publisher}/>)
                }
            </div>
        );
    }
}

export default Cards