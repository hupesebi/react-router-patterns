import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
    const list = Object.keys(colors).map((name) =>(
        <li key={name}>
           <Link to={`/colors/${name}`}> {name} </Link>
        </li>
    ));

    return(
        <div>
            <h1> Welcome to color factory </h1>
            <Link to='/colors/new'> Add a new color </Link>
            <ul>
                {list}
            </ul>
        </div>
    )
   
}

export default ColorList