import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header () {
    return(
        <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand href="#home">C3LX Challenge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">API Heartbeat</Nav.Link>
                    <Nav.Link href="/challenges">Challenges</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header