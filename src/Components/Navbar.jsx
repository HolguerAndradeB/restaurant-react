import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ReservaEnLinea from './ReservaEnLinea';
import Carro from "./Carro";

function NavbarApp() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/" className="text-logo">Sal&salsa</Navbar.Brand>
                <Navbar.Toggle className="icon-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="/menu">Menú</Nav.Link>
                        <Nav.Link href="/servicios">Servicios</Nav.Link>
                        <Nav.Link href="/contacto">Contáctanos</Nav.Link>
                        {/* <Button variant="outline-info">Reserva en línea</Button> */}
                        <ReservaEnLinea />
                        <Carro/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



            {/* <div className="nav-bar">
                <Link to="/country">Country</Link>
                <Link to="/about">About</Link>
            </div> */}
        </>
    );
}

export default NavbarApp;
