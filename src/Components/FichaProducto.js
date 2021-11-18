import React from 'react';
import {Modal, Button, Card, Form, Row, Col} from "react-bootstrap";
import './styles/fichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component {
    
    constructor(props) {        
        super();
        this.state = {
            modal: false,
            listaCarrito,
            stock: props.props.stock // DATA QUE LLEGA DESDE EL JSON
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
        console.log(props.props);
    }

    toggle() {
        console.log(this.props);
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito() {
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });

        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        if(this.state.stock !== 0) {
            this.setState(prevState => ({
                modal: !prevState.modal,
                stock: prevState.stock - 1
            }));
        } else {
            alert('STOCK AGOTADO');
        }

        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header>{this.props.props.titulo}</Modal.Header>
                    <Modal.Body>
                        <Card.Img src={this.props.props.imagen}/>
                        <p>Detalle del producto seleccionado: </p>
                        {this.props.props.descripcion}
                        <p>Valor del producto: $<b>{this.props.props.precio}.</b></p>
                        <p>Stock: <b>{this.state.stock}</b> unidades.</p>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default FichaProducto;
