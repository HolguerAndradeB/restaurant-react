import React, { Component } from "react";
import Slider from "./Slider"
import Informacion from "./Informacion"
import Testimonios from "./Testimonios"
import {Row} from "react-bootstrap";

class Inicio extends Component {

    render() {
        return(
            <>
                <Slider />
                <Row>
                    <Informacion />
                    <Testimonios />
                </Row>
                
            </>
        );
    }
}

export default Inicio;
