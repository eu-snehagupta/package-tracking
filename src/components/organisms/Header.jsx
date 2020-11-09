// React core
import React from "react";
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/images/logo.svg";

export default function Header() {
    return (
        <header className={"header"} >
            <Link href="/" >
                <img src={logo} alt= "Logo of the yellow company" />
            </Link>
            <div className="search-bar">
                <input placeholder= "Search" />
                <a href= "#">Search</a>
            </div>
        </header>
    )
}