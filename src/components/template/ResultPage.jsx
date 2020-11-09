// React Core
import React from "react";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";
import Footer from "../organisms/Footer";

export default function ResultPage({ match, information }) {
//data
const query= new RegExp(match.params.query, "i");
const results= information.filter((item) => item.parcel_id.match(query));

const Cards= results.map((item) => {
    return <Card key={item.id} data={item} />;
});

    return (
    <div className= "result-page">
        <Header />

        <section className= "container">
            <h3>The result will appear here: </h3>
            <div className= "grid">{Cards}</div>
        </section>

        <Footer />
    </div>
    );
}