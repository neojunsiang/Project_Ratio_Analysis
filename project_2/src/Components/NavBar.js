import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Search</Link>
                <Link to="/analysis">Analysis</Link>
                <Link to="/knowledge">Knowledge</Link>
            </nav>
        </>
    )
}

export default NavBar;