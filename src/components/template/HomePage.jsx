// React Core
import React from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";
import Footer from "../organisms/Footer";

export default function HomePage({information}) {
  
  const Cards= information.map((item) => {
      return <Card key={item.id} data={item} />;
    });
    
  return (
    <div className="home-page">
      <Header />
      <div className="grid">{Cards}</div>
      <Link className= "button" to= "/">Back</Link>
      <Footer />
    </div>
      
  );
}