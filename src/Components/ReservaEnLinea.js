import {React, useState} from 'react';
import {Modal, Button, Form, Row, Col} from "react-bootstrap";

function ReservaEnLinea() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
        Reserva en línea
        </Button>
  
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Reserva tu servicio</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="https://formsubmit.co/holgerandrade@gmail.com" method="POST" autocomplete="off">
                    <Row>
                        <Col xs={12} md={4}>
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control name="nombres" type="text" placeholder="Nombres" required/>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control name="apellidos" type="text" placeholder="Apellidos" required/>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Servicio</Form.Label>
                            <Form.Select name="servicio" className="me-sm-2" id="inlineFormCustomSelect">
                                <option value="">Seleccione una opción</option>
                                <option value="Celebración de cumpleaños">Celebración de cumpleaños</option>
                                <option value="Aniversarios">Aniversarios</option>
                                <option value="Fiestas infantiles">Fiestas infantiles</option>
                                <option value="Declaraciones o propuestas">Declaraciones o propuestas</option>
                                <option value="Despedidas">Despedidas</option>
                                <option value="Cena con amigos">Cena con amigos</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@dominio.com" />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="123456" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>N° de personas</Form.Label>
                            <Form.Control name="personas" type="number" placeholder="0" />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Fecha y hora</Form.Label>
                            <Form.Control name="fecha" type="datetime-local" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Label>Solicitudes adicionales</Form.Label>
                            <Form.Control name="solicitudes" type="text" placeholder="Observaciones" />
                        </Col>
                    </Row>
                    <Row>
                        <input type="hidden" name="_next" value="http://localhost/app-restaurant/servicios.html" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_autoresponse" value="Reserva realizada satisfactoriamente." />
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Realizar reserva
                </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default ReservaEnLinea;
