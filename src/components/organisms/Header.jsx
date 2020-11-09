// React core
import { React, useState } from "react";
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/images/logo.svg";

export default function Header() {

//Reactive data
const [query, setQuery]= useState("");

    return (
        <header className={"header"} >
            <Link to="/homepage" >
                <img src={logo} alt= "Logo of the yellow company" />
            </Link>
            <div className="search-bar">
                <input 
                placeholder= "Search" 
                value={query} 
                onChange={(event) => setQuery(event.target.value)}
                />
                <Link to= "{`/results/${query}`}">Search</Link>
            </div>
        </header>
    );
}