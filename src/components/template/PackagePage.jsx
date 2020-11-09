// React Core
import React from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";
import Footer from "../organisms/Footer";

export default function PackagePage ({match, information}) {

//data
const matchId= new RegExp(match.params.id, "i");
const results= information.filter((item) => item.id.match(matchId));

console.log(matchId);
console.log(results);
console.log(information);

const Cards= results.map((item) => {
    return <Card key={item.id} data={item} />;
});
  return(
    <div className= "package-page">
      <Header />
      <div className="text-container">
          <section className= "container">
                <div className= "grid">{Cards}</div>
          </section>
          <Link className= "button" to= "/homepage">
            Back to Home
          </Link>
      </div>
      <Footer />
    </div>
  );
}