import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './style.scss';

const Navbar = ()=>{
    return(
        <Fragment>
            <header className="header">
                <div className="brand"></div>
                {/* <img alt="Meu avatar" src={"./assets/avatar.png"}/> */}
                <h1>Bruno Ferraz</h1>
                <nav className="navBar">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar;