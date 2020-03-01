import React from "react";

import Hero from "../components/Hero"
import CardBody from "../components/cardbody"

function Portfolio(props){
    return(
        <div>
            <Hero title={props.title} />
    
            <CardBody />

        </div>

    );

}

export default Portfolio;