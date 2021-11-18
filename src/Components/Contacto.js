import React, { Component } from "react";
import {Button, Form, Row, Col} from "react-bootstrap";

class Contacto extends Component {

    render() {
        return(
            <>
                <Row className="body-container">
                    <h1>Contáctanos</h1>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p class="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa voluptas officia voluptatibus odit tempore! Non dolorum dolore, tempore ex quas unde odio voluptate rerum praesentium id quod minus repudiandae. Cumque quos laboriosam incidunt totam, delectus reprehenderit tempore in dolorum aspernatur, tempora saepe ullam sunt porro labore nobis quidem iure vero doloribus harum nesciunt optio facilis nulla.<br></br><br></br>
                        Laudantium, deserunt quidem? Quia, voluptas. A, quidem minima ducimus voluptates nisi nemo in explicabo repellendus vero eaque sequi nam accusantium provident. Nostrum odio, reiciendis asperiores ab totam ex expedita voluptate atque cumque harum? Eligendi labore excepturi vero magnam harum ullam suscipit, sed voluptatibus illo modi quasi nam veniam.
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form action="https://formsubmit.co/holgerandrade@gmail.com" method="POST" autocomplete="off">
                            <Row>
                                <Form.Select name="servicio" className="marginInputs me-sm-2" id="inlineFormCustomSelect">
                                    <option value="">Seleccione el servicio</option>
                                    <option value="Celebración de cumpleaños">Celebración de cumpleaños</option>
                                    <option value="Aniversarios">Aniversarios</option>
                                    <option value="Fiestas infantiles">Fiestas infantiles</option>
                                    <option value="Declaraciones o propuestas">Declaraciones o propuestas</option>
                                    <option value="Despedidas">Despedidas</option>
                                    <option value="Cena con amigos">Cena con amigos</option>
                                </Form.Select>
                                <Form.Control className="marginInputs" name="nombres" type="text" placeholder="Nombres completos" required/>
                                <Form.Control className="marginInputs" name="email" type="email" placeholder="Correo electrónico" required/>
                                <Form.Control className="marginInputs" as="textarea" aria-label="With textarea" placeholder="mensaje"/>
                                <Form.Check className="marginInputs" type="checkbox" label="Acepto Terminos y condiciones" />
                                <Button size="lg" variant="primary" >Enviar</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Contacto;
