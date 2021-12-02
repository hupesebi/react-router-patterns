import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
    return(
        <section>
            {dogs.map((dog) =>(
                <div>
                <h1> {dog.name}</h1>
                <img src={dog.src} alt={dog.name}></img>
                <Link to={`/dogs/${dog.name}`}>Details</Link>
                </div>
            ))}
         </section>
    )

}

export default DogList;