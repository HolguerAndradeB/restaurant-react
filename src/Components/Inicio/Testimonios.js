import React, { Component } from "react";
import {Container, Carousel, Row, Col} from "react-bootstrap";
import Testimonio1 from '../img/testimonio1.png'
import Testimonio2 from '../img/testimonio2.png'
import '../styles/inicio.css';

class Testimonios extends Component {

    render(props) {
        return(
            <>
                <Carousel fade variant="dark">
                    <Carousel.Item className="carousel-testimonios">
                            <Container>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <img className="img-testimonio" src={Testimonio1} alt="Testimonio 1" />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <p className="text-testimonios">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse magnam pariatur maxime natus alias iusto. Voluptate similique odit libero? Alias veritatis culpa modi neque quos placeat beatae provident suscipit. lorem ipsum dolor sit lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium quas autem.</p>
                                    </Col>
                                </Row>
                            </Container>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-testimonios">
                            <Container>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <img className="img-testimonio" src={Testimonio2} alt="Testimonio 2" />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <p className="text-testimonios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.</p>
                                    </Col>
                                </Row>
                            </Container>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export default Testimonios;
