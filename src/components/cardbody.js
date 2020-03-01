import React from "react";
import nick from "../assets/images/nick"
import digital from "../assets/images/digital-portfolio"
import portfolio from "../assets/images/portfolio"

class CardBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: "Project",
                    SubTitle: "This is a boot-camp class project ",
                    imgSrc: nick,
                    link: "https://limitless-refuge-47363.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1, 
                    title: "LinkedIn",
                    SubTitle: "This is my likedIn portfolio ",
                    imgSrc: digital,
                    link: "https://linkedin.com/in/nikddimos-gebregiorgis",
                    selected: false
                },
                {
                    id: 0, 
                    title: "Github",
                    SubTitle: "This is my github link with other projects ",
                    imgSrc: portfolio,
                    link: "https://github.com/Nick-code92",
                    selected: false
                },

               
                
            ],

        }
    }

    render(){
        return(
            <p>CardBody</p>
        );
    }
}

export default CardBody;