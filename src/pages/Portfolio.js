import React from "react";

import Hero from "../components/Heros"
import CardBody from "../components/Cardbodys"

function Portfolio(props){
    return(
        <div>
            <Hero title={props.title} />
    
            <CardBody />

        </div>

    );

}

export default Portfolio;