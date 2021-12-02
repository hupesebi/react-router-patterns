import React from 'react'
import { Link, useHistory, useParams } from "react-router-dom";

const Color = ({colors}) => {
    const { name } = useParams();
    const history = useHistory();
    if (!colors[name]) history.push("/colors");
    const color = colors[name];

    return(
        <div style={{backgroundColor: color}}>
            <h1>this is {name} </h1>
            <p>
                <Link to="/">Go back</Link>
            </p>

        </div>
    );

}

export default Color