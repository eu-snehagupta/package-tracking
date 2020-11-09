// React Core
import React from "react";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";

export default function ResultPage({ match, information }) {
//data
const query= new RegExp(match.params.query, "i");
const results= information.filter((item) => item.user_name.match(query));

console.log(information);
console.log(query);
console.log(results);
console.log(match);


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
    </div>
    );
}