import React from "react";
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import {listaCarrito} from '../listaCarrito.json';
import '../App.css';

class Carro extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            disabled: true,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    sumaTotal() {
        let total = 0;
        let totalCompra = this.state.listaCarrito.map(
            (listaCarrito) => {
                total += parseInt(listaCarrito.precio)*1000;
            }
        )
        if(this.total > 0) {
            this.disabled = false;
        }
        return(total);
    }

    // deleteProducto(index) {
    //     this.state.listaCarrito.splice(index, 1);
    //     console.log(index);
    // }

    render() {
        let arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return(
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                        <td className="center-icon"><p className="material-icons btn-delete">delete</p></td>
                    </tr>
                );
            }
        )

        return(
            <div>
                <Button className="icon-carrito" id="Popover1" color="success" outline>
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="success" id="Badge1">{listaCarrito.length}</Badge>
                    {/* <Badge color="secondary">{arregloCarrito.length}</Badge> */}
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader><b>Listado de compras</b></PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Gestión</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <td>Total:</td>
                                <td></td>
                                <td>{Intl.NumberFormat("de-DE").format(this.sumaTotal())} COP</td>
                            </tfoot>
                        </Table>
                        <div className="d-grid gap-2">
                            <Button disabled={this.disabled} size="lg" color="success">PAGAR</Button>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;
