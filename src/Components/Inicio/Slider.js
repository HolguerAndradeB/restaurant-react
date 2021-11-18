import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import Slider1 from '../img/slider1.png'
import Logo from '../img/logo.png'
import '../styles/inicio.css';

class Slider extends Component {

    render(props) {
        return(
            <>
                <Carousel variant="dark">
                    <Carousel.Item className="carousel-properties">
                        <img className="img-properties w-100" src={Slider1} alt="Imagen 1" />
                        <div className="container-logo">
                            <img className="img-logo" src={Logo} alt="Logo" />
                        </div>
                        <Carousel.Caption className="contenedor-slider">
                            <h3 className="title-slider">sal&salsa</h3>
                            <p className="subtitle-slider">Sabores que <b>exaltan</b> tus sentidos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-properties">
                        <img className="img-properties w-100" src={Slider1} alt="Imagen 2" />
                        <Carousel.Caption className="contenedor-slider">
                            <h3 className="title-slider">Un menú para todos</h3>
                            <p className="subtitle-slider">Los platos más exclusivos de la ciudad</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export default Slider;
