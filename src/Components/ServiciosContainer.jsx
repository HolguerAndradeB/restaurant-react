import React from "react";
import './styles/servicios.css';
import '../App.css';
import { Col, Card, Button } from "react-bootstrap";
import ReservaEnLinea from './ReservaEnLinea';

class ServiciosContainer extends React.Component {

    render() { 
        return (
            <>
                <Col sm="4" className="body-container">
                    <Card className="Card bg-card-servicios" body outline color="primary" >
                        <Card.Img variant="top" src={this.props.imagen} />
                        <Card.Body>
                            <Card.Title><b>{this.props.titulo}</b></Card.Title>
                            <Card.Text>
                                {this.props.descripcion}
                            </Card.Text>
                            {/* <Button variant="info">Reserva en línea</Button> */}
                            <ReservaEnLinea props={this.props}/>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );    
    }
}
 
export default ServiciosContainer;
