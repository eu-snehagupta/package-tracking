// React Core
import React from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../organisms/Header";

export default function PackagePage ({match, information}) {

  const matchId = match.params.id;
  console.log(match);
    
    const {
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        user_phone,
        user_name,
        last_updated,
      } = information[0];

    return(
        <div className= "package-page">
           <Header />
           <div className="text-container">
                <h3 className="parcel-id">#Parcel ID: {parcel_id}</h3>
                    <p>UserName: {user_name}</p>
                    <p>Registered phone number: {user_phone}</p>
                    <p>Order status: {status}</p>
                    <p>ETA: {eta}</p>
                    <p>Last Updated: {last_updated}</p>
                    <p>Verification Required: {verification_required}</p>
                    <p>Sender: {sender}</p>
                    <p>Pickup Location: {location_name}</p>
                    <p>Pickup Coordinate: {location_coordinate_latitude},{location_coordinate_longitude}</p>
                    {/* <p>Notes: {notes}</p> */}
                    <Link className= "button" to= "/">
                      Back to Home
                    </Link>
           </div>
        </div>
    )
    
}