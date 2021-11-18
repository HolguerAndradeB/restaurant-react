/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import Logo from './img/logo.png'

class Footer extends Component {

    render(props) {
        return(
            <>
                <div className="footer marginTop">
                    <Row className="row marginTop">
                        <Col sm={3}>
                            <img src={Logo} className="imgFooter img-fluid" alt="Logo" />
                        </Col>
                        <Col sm={6}>
                            <Row className="row">
                                <Col sm={4}>
                                    <a className="linksFooter" href="mapa.html"><h4>MAPA DE SITIO</h4></a>
                                </Col>
                                <Col sm={4}>
                                    <a className="linksFooter" href="contacto.html"><h4>CONTÁCTANOS</h4></a>
                                </Col>
                                <Col sm={4}>
                                    <a className="linksFooter" href="index.html"><h4>RESERVAS</h4></a>
                                </Col>
                            </Row>
                            <Row className="row marginTop marginBottom">
                                <div className="div-ubicacion">
                                    <span>Restaurante Sal y Salsa Ltda.</span><br></br>
                                    <span>Calle 19 No 7-30 Bogotá.</span><br></br>
                                    <span>Reservas@salysalsa.com</span><br></br>
                                    <span>312 325 1321.</span><br></br>
                                    <span></span><br></br>
                                    <span>© Copyright 2021.</span>
                                </div>
                            </Row>
                        </Col>
                        <Col sm={3}>
                            <iframe className="mapFooter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18905.68596021383!2d-73.99566298628417!3d5.
                            033659393981423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407020507b7b01%3A0xdf488196ac237f!2sCatedra
                            l%20de%20Sal!5e0!3m2!1ses-419!2sco!4v1631554022886!5m2!1ses-419!2sco" allowfullscreen=""
                            loading="lazy"></iframe>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Footer;
