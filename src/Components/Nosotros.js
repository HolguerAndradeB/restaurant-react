import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Historia from '../Components/img/nosotros.png';
import Testimonio1 from '../Components/img/testimonio1.png';
import Testimonio2 from '../Components/img/testimonio2.png';
import Persona3 from '../Components/img/persona3.png';
import Testimonios from "./Inicio/Testimonios"
import '../App.css';

class Nosotros extends Component {

    render() {
        return(
            <>
                <Container>
                    <Row className="body-container">
                        <Col xs={12} md={5}>
                            <div className="container-img">
                                <img className="img-historia" src={Historia} alt="Logo" />
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <h1>Nuestra historia</h1>
                            <p className="text-historia">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra diam in vestibulum eleifend. Suspendisse ultrices elit non nulla elementum ultricies. Sed pulvinar quam nec semper lacinia. Sed porta orci diam, eget convallis turpis mollis nec. Donec id dictum augue, vitae varius ipsum. In hac habitasse platea dictumst. Nunc nunc velit, convallis at fermentum a, eleifend ac purus. Nulla placerat ac justo sed interdum. Maecenas hendrerit mauris quis quam posuere faucibus.</p>
                            <p className="text-historia">In imperdiet at lorem eget tincidunt. Fusce in mauris eu urna ultrices lobortis. Integer id condimentum nisi, et mattis lorem. Integer semper faucibus varius. Nulla nec ex eu dui pretium rutrum. Duis suscipit id dolor sed sagittis. Donec et malesuada eros. Proin malesuada id turpis ut feugiat.</p>
                            <p className="text-historia">Fusce eu lobortis leo. In tristique, mi in suscipit molestie, tellus nisi feugiat nibh, sed accumsan nisl quam eu metus. Vivamus nunc turpis, facilisis vel nulla vel, vestibulum pulvinar nisl. In euismod velit id nisi vehicula vulputate. Suspendisse dui purus, ultricies ac laoreet in, finibus at augue. Donec facilisis volutpat magna ac dictum. Aliquam dignissim vehicula ex non vestibulum. Nunc consectetur iaculis auctor.</p>
                        </Col>
                    </Row>
                </Container>
                
                <section className="container-nosotros">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="contenedor-persona">
                                <img className="img-persona" src={Testimonio1} alt="Persona 1" />
                            </div>
                            <p className="nombre-persona">Camila Benavides</p>
                            <p className="cargo-persona">Administradora</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="contenedor-persona">
                                <img className="img-persona" src={Testimonio2} alt="Persona 2" />
                            </div>
                            <p className="nombre-persona">Carlos Delagado</p>
                            <p className="cargo-persona">Jefe de cocina</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="contenedor-persona">
                                <img className="img-persona" src={Persona3} alt="Persona 3" />
                            </div>
                            <p className="nombre-persona">Claudia Narvaez</p>
                            <p className="cargo-persona">Contadora</p>
                        </Col>
                    </Row>                
                </section>
                <Testimonios />
            </>
        );
    }
}

export default Nosotros;
