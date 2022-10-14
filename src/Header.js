import React from "react";
// import { Router } from "express";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-font-awesome';
import { faMagnifyinGlass } from '@fortawesome/free-solid-svg-icons'
const Header = () =>{
    return(
        <header>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                </ul>
                <div className="search">
                    <input type="text" id="searchbar">Search an item</input>
                    <button type="submit" id="searchButton">{}</button>
                    <button type="submit" id="searchButton">{faMagnifyinGlass}</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;
