import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Display = (props) => {
    // get the input title and id from URL
    const { title, id } = useParams()

    // store data pass from swapi
    const [data, setData] = useState("")
    const [errorCode, setErrorCode] = useState(0)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${title}/${id}`)
            .then(response => {
                setData(response.data)
                console.log(response.data)
                setErrorCode(0)
            })
            .catch(error => {
                console.log(error)
                setErrorCode(error.response.status)
            })
    }, [title, id])


    // different out from people and planets
    let results = <div></div>;
    if (errorCode === 404) {
        results = (<div>
            <h1>These aren't the droids you're looking for</h1>
            <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="Obi-Wan_Kenobi" />
        </div>
        )
    } else if (title === "people") {
        results = (
            <ul>
                <li>Height: {data.height}</li>
                <li>Mass: {data.mass}</li>
                <li>Hair Color: {data.hair_color}</li>
                <li>Skin Color: {data.skin_color}</li>
                <li>Home World: </li>
            </ul>)
    } else if (title === "planets") {
        results = (
            <ul>
                <li>Climate: {data.climate}</li>
                <li>Terrain: {data.terrain}</li>
                <li>Surface Water: {data.surface_water}</li>
                <li>Population: {data.population}</li>
            </ul>)
    }

    return (
        <>
            {
                errorCode !== 404 ? <h1>{data.name}</h1> : <p>&nbsp;</p>
            }
            <div>
                {results}
            </div>
        </>
    )
};

export default Display;
