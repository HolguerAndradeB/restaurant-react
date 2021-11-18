import React, { Component } from "react";
import NavbarApp from "./Navbar";
import "./styles/header.css";

class Header extends Component {
    render() {
        return(
            <>
                <div className="header">
                    <NavbarApp />
                </div>
            </>
        );
    }
}

export default Header;
