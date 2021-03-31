import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => { // rendering of Navbar on the webpage
    return (
        <>
            <nav className="navbar" style={{ justifyContent: "space-evenly", backgroundColor: "black", opacity: "0.9", fontWeight: "bold" }}>
                <Link to="/">Search</Link>
                <Link to="/analysis">Analysis</Link>
                <Link to="/knowledge">Knowledge</Link>
            </nav>
        </>
    )
}

export default NavBar;