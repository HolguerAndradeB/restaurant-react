import React from "react";
import Country from "./Country";
// import Germany from "../img/germany.png";
// import EEUU from "../img/EEUU.png";
// import Brazil from "../img/Brazil.png";

const ListaPaises = (props) => {
    return(
        <>
            <Country nombre="Germany" bandera="{Germany}" poblacion="85000" />
            <Country nombre="United states of america" bandera="{EEUU}" poblacion="47000" />
            <Country nombre="Brazil" bandera="{Brazil}" poblacion="10000" />
        </>
    )
}

class CountryContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0, // SE DECLARA LAS VARIABLES
        };
    }

    contadorNum = () => {
        setTimeout(() => {
            this.setState({
                contador: this.state.contador + 1,
            });
        }, 1000);
    };

    componentDidUpdate(){
        this.contadorNum();
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <div className="country-container">
                    <ListaPaises />
                    {this.state.contador}
                </div>
                <button onClick={this.contadorNum}>Click</button>
            </>
        );
    }
}

export default CountryContainer;
