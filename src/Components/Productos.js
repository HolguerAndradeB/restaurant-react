import React from 'react';
import ProductosContainer from './ProductosContainer';
import {listaProductos} from '../listaProductos.json';
import {Container, Row} from "react-bootstrap";

class Productos extends React.Component {

    constructor() {
        super();
        this.state = {
            listaProductos
        };
    }

    render() {
        const arregloComponente = this.state.listaProductos.map(
          (listaProductos, i) => {
            return(
              <ProductosContainer
                key = {listaProductos.id}
                titulo = {listaProductos.titulo}
                imagen = {listaProductos.imagen}
                descripcion = {listaProductos.descripcion}
                precio = {listaProductos.precio}
                stock = {listaProductos.stock}
              />
            )
          }
        );
    
        return (
          <Container>
            <Row>
              {arregloComponente}
            </Row>
          </Container>
        );
    }
}

export default Productos;
