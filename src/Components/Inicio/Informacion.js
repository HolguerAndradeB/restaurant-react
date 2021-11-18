import React, { Component } from "react";
import Menu from '../img/menu.png'
import Menu1 from '../img/menu1.png'
import Menu2 from '../img/menu2.png'
import Menu3 from '../img/menu3.png'
import Menu4 from '../img/menu4.png'
import Menu5 from '../img/menu5.png'
import Fiestas from '../img/fiestas.png'
import Matrimonios from '../img/matrimonios.png'
import Cenas from '../img/cenas.png'
import Cumpleaños from '../img/cumpleaños.png'
import {Container, Carousel, Row, Col, Button} from "react-bootstrap";
import '../styles/inicio.css';

class Informacion extends Component {

    render(props) {
        return(
            <>
                <section className="container-propuesta">
                    <div className="container">
                        <h3 className="title-propuesta">Nuestra propuesta</h3>
                        <p className="text-propuesta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste quia facilis eligendi qui alias eos, fugiat laborum amet, ex quidem quaerat omnis necessitatibus similique dolorem tempore provident voluptatem inventore! Lorem ipsum dolor sit amet consectetur,  elit. Alias, beatae ratione omnis in dicta numquam, animi quod sit harum  perspiciatis facilis voluptatum. Alias sint ad autem saepe nihil ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam rerum architecto veniam, similique aut natus vel necessitatibus nobis veritatis suscipit culpa quis, minima fugit perspiciatis ducimus velit, neque quod.</p>
                    </div>
                </section>
                <Container className="secciones-inicio">
                    <h1>Los recomendados del Chef</h1>
                    <Row>
                        <Col xs={12} md={6}>
                            <Carousel fade variant="dark">
                                <Carousel.Item className="carousel-recomendados">
                                        <Col xs={12} md={12}>
                                            <img className="img-recomendaciones w-100" src={Menu1} alt="Menu 1" fluid />
                                        </Col>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-recomendados">
                                        <Col xs={12} md={12}>
                                            <img className="img-recomendaciones w-100" src={Menu2} alt="Menu 2" fluid />
                                        </Col>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-recomendados">
                                        <Col xs={12} md={12}>
                                            <img className="img-recomendaciones w-100" src={Menu3} alt="Menu 3" fluid />
                                        </Col>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-recomendados">
                                        <Col xs={12} md={12}>
                                            <img className="img-recomendaciones w-100" src={Menu4} alt="Menu 4" fluid />
                                        </Col>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-recomendados">
                                        <Col xs={12} md={12}>
                                            <img className="img-recomendaciones w-100" src={Menu5} alt="Menu 5" fluid />
                                        </Col>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <img className="img-menu" src={Menu} alt="Menu" fluid />
                            </Row>
                            <Row>
                                <Button size="lg" variant="success" >Descargar menú</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <section className="container-organizacion">
                    <div className="container">
                        <Row>
                            <h3 className="title-organizamos">Organizamos tu evento</h3>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <div>
                                    <img className="img-organizacion" src={Fiestas} alt="Fiestas" />
                                </div>
                                <div>
                                    <h4 className="title-eventos">Fiestas temáticas</h4>
                                    <p className="text-eventos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <img className="img-organizacion" src={Matrimonios} alt="Matrimonios" />
                                </div>
                                <div>
                                    <h4 className="title-eventos">Fiestas temáticas</h4>
                                    <p className="text-eventos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <img className="img-organizacion" src={Cenas} alt="Cenas" />
                                </div>
                                <div>
                                    <h4 className="title-eventos">Fiestas temáticas</h4>
                                    <p className="text-eventos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <img className="img-organizacion" src={Cumpleaños} alt="Cumpleaños" />
                                </div>
                                <div>
                                    <h4 className="title-eventos">Fiestas temáticas</h4>
                                    <p className="text-eventos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo facere aliquid voluptates sunt quis. Quas eius ipsa sunt neque voluptas, dolorem soluta. Aspernatur, earum explicabo autem obcaecati porro tenetur.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </>
        );
    }
}

export default Informacion;
