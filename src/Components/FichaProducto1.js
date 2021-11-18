import React from 'react';
import {Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './styles/fichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modal: false,
            disabled: false,
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
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        if(this.state.stock !== 0) {
            this.setState(prevState => ({
                modal: !prevState.modal,
                stock: prevState.stock - 1
            }));
            listaCarrito.push({
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });
        } else {
            this.disabled = true
            alert('STOCK AGOTADO');
        }

        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;
    }

    render() {
        return (
            <Container>
                <Button color="info" onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader><b>{this.props.props.titulo}</b></ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <br />
                        <p className="text-products">Detalle del producto seleccionado: <br />
                            {this.props.props.descripcion}
                        </p>
                        <p><b>Valor:</b> {this.props.props.precio} COP</p>
                        <p><b>Stock:</b> {this.state.stock} unidades.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button disabled={this.disabled} color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;
