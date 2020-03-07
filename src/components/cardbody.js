import React from "react";

import Card from "./Card"

import nick from "../assets/image/nick.jpg";
import digital from "../assets/image/digital.jpg"
import portfolio from "../assets/image/portfolio.jpg"
import {Container, Row } from "react-bootstrap";



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
                    id: 2, 
                    title: "Github",
                    SubTitle: "This is my github link with other projects ",
                    imgSrc: portfolio,
                    link: "https://github.com/Nick-code92",
                    selected: false
                },

               
                
            ],

        }
    }

    handleCardClick =(id, Card) => {
        console.log(id);

        let items =[...this.state.items];

        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if (item.id !== id) {
            item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
             return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around" >
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }
}

export default CardBody;