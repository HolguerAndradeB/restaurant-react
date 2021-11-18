import React from "react";
import Header from './Header';
import Footer from './Footer';

function Layout(props){
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="container10000">{props.children}</div>
                <Footer />
            </div>
        </>
    ); 
}

export default Layout;
