// React Core
import React from "react";

//Components
import Header from "../organisms/Header";

export default function PackagePage ({information}) {
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
      //   notes,
        last_updated,
      } = information;

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
                    <a className= "button" href= "#">
                      Back to Home
                    </a>
           </div>
        </div>
    )
    
}