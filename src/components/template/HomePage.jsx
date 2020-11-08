// React Core
import { React, useEffect, useState } from "react";

//Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";

export default function HomePage() {
    //0= loading, 1= ready, 2= error
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const endpoint= "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect( () => {
    const getData = async () => {
      try {
        const response= await fetch(endpoint, { mode: "cors"});
        const data= await response.json();
        setInformation(data);
        setStatus(1);
      }
      catch {
        setStatus(2);
      }
    };
    getData();
  }, []);
  
  const Cards= information.map((item) => {
      return <Card key={item.id} data={item} />;
    });
    
  return (
    <div className="home-page">
      <Header />
      {status === 0 ? <p>Loading..</p> : null}
      {status === 1 ? Cards : null}
      {status === 2 ? <p>Error, Cant fetch data!</p> : null}
    </div>
  );
}