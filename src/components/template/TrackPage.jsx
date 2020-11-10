//React core
import React from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function TrackPage() {
    return (
        <div className= "track-page">
            <Header className= "header"/>
            <Link className= "button" to= "/homepage">
                Track
            </Link>
            <Footer className= "footer"/>
        </div>
    )
}