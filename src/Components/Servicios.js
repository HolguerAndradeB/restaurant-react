import React from 'react';
import ServiciosContainer from './ServiciosContainer';
import {listaServicios} from '../listaServicios.json';
import {Container, Row} from "react-bootstrap";

class Servicios extends React.Component {

    constructor() {
        super();
        this.state = {
            listaServicios
        };
    }

    render() {
        const arregloComponente = this.state.listaServicios.map(
          (listaServicios, i) => {
            return(
              <ServiciosContainer
                key = {i}
                titulo = {listaServicios.titulo}
                imagen = {listaServicios.imagen}
                descripcion = {listaServicios.descripcion}
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

export default Servicios;
