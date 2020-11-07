//React core
import React from "react";

export default function Details() {
    return (
        <div className= {"track-form"}>
            <article className= "input-details">
            <h3>Username</h3>
            <input placeholder= "Enter your username" />
            </article>
            <article className= "input-details">
            <h3>Phone Number</h3>
            <input placeholder= "Enter your phone number" />
            </article>
            <a className="button" href= "#">Track</a>
        </div>
    )
}