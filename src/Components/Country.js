import React, { Component } from "react";

class Country extends Component {

    render(props) {
        return(
            <>
                <div className="country">
                    <img src={this.props.bandera} alt="Imagen de una bandera" />
                    <h1>{this.props.nombre}</h1>
                    <label>Población: {this.props.poblacion}</label>
                </div>
            </>
        );
    }
}

export default Country;





/*
function Country() {
    return (<h1>country</h1>)
}
*/

/* COMPONENTE DE FUNCION
const Country = () => <h1>Country</h1>;

export default Country;
*/