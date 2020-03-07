import React from "react";
import { useSpring, animated } from "react-spring"

function CardInfo(props) {

    const style = useSpring({ apacity: 1, from: { apacity: 0 } });

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title" >{props.title}</p>
            <p className="g-card-sub-title" >{props.subTitle}</p>
            <a href={props.link} target="blank" rel="noopener noreferre" >View</a>
        </animated.div>
    );
}


export default CardInfo;