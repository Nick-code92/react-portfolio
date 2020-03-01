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
                    <a class="nav-link" href="https://github.com/Nick-code92"> Github </a>
                    <a class="nav-link" href="https://linkedin.com/in/nikddimos-gebregiorgis"> Linkedin </a>
                    <Col className="p-0 d-flex justify-content-end " md="3">
                    This is my Portfolio
                    </Col>
                </Row>
            </Container>
        </footer>

    );

}

export default Footer;