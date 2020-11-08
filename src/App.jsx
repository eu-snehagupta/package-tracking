//React Core
import { React, useEffect, useState } from "react";

//components
import HomePage from "./components/template/HomePage";
import PackagePage from "./components/template/PackagePage"

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
      {status === 0 ? <p>Loading..</p> : null}
      {status === 1 ? <HomePage information={information}/> : null}
      {status === 2 ? <p>Error, Cant fetch data!</p> : null}
      {/* <PackagePage information={information[0]}/> */}
    </div>
  );
}