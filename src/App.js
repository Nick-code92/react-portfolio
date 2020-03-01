import React from 'react';
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: `Nikddimos Gebregiorgis`,
      headerLink: [
        { title: "Portfolio", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      portfolio: {
        title: "I'm a junior developer",
        subTitle: "projects that made a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "You can contact me anytime", 
      }
    }
  }

  render (){
    return (
     <Router>
       <Container className="p-o" fluid={true}>
         <Navbar className="border-bottom">
           <Navbar.Brand>Nikddimos Gebregiorgis</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbar-toggle" />
           <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Portfolio</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
           </Navbar.Collapse>
         </Navbar>

         
       </Container>

     </Router>
    );
  }
  }

export default App;
