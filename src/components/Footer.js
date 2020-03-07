import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import {Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <footer className="at-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}> 
                    Nikddimos Gebregiorgis
                    
                    
                    </Col>
    
                    <Col className="p-0 d-flex justify-content-end " md="3">
                    This is my Portfolio
                    </Col>
                </Row>
            </Container>
        </footer>

    );

}

export default Footer;