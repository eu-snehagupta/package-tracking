// React Core
import { useEffect, useState } from "react";

//components
import Header from "./components/organisms/Header";
import TrackForm from "./components/molecules/TrackForm";
import Card from "./components/molecules/Card";

//style
import "./css/style.css"

export default function App() {

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

  return (
    <div className="App">
      <Header />
      <TrackForm />
      {status === 0 ? <p>Loading..</p> : null}
      <h3>React fetch {status}</h3>
      {status === 0 ? <p>Loading..</p> : null}
      {status === 1 ? <Card data= {information[0]} /> : null}
      {status === 2 ? <p>Error, Cant fetch data!</p> : null}

    </div>
  );
}