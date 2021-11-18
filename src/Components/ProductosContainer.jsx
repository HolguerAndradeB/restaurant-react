import React from "react";
import './styles/servicios.css';
import '../App.css';
import { Col, Card } from "react-bootstrap";
import FichaProducto from './FichaProducto1';

class ProductosContainer extends React.Component {

    render() { 
        return (
            <>
                <Col sm="4" className="body-container">
                    <Card className="bg-card-productos Card " body outline color="primary" >
                        <Card.Img variant="top" src={this.props.imagen} />
                        <Card.Body>
                            <Card.Title><b>{this.props.titulo}</b></Card.Title>
                            <Card.Text>
                                Valor: ${this.props.precio}
                                <br />
                                <p className="text-products">
                                    {this.props.descripcion}
                                </p>
                            </Card.Text>
                            <FichaProducto props={this.props}/>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );    
    }
}

export default ProductosContainer;
