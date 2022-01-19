import React, { Fragment } from "react";
import "./style.scss"

import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <Fragment>
            <header className="header">
                <div>Brand</div>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/contact">About</Link>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar;