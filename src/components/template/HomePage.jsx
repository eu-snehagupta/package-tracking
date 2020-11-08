// React Core
import React from "react";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";

export default function HomePage({information}) {
  
  const Cards= information.map((item) => {
      return <Card key={item.id} data={item} />;
    });
    
  return (
    <div className="home-page">
      <Header />
      {Cards}
    </div>
  );
}