// React core
import React from "react";

// Media assets
import logo from "../../assets/images/logo.svg";

export default function Header() {
    return (
        <header className={"header"} >
            <a href="#" >
                <img src={logo} alt= "Logo of the yellow company" />
            </a>
            <div className="search-bar">
                <input placeholder= "Search" />
                <a href= "#">Search</a>
            </div>
        </header>
    )
}