// React core
import React from "react";
// import { Link } from "react-router-dom";

export default function Card({ data }) {
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
    } = data;
  
    return (
        <article className="card">
            {/* <Link to={`video/${parcel_id}`}></Link> */}
            <div className="card-item">
                <h3 className="parcel-id">#Parcel ID: {parcel_id}</h3>
                <p>UserName: {user_name}!</p>
                <p>Registered phone number: {user_phone}</p>
                <p>Order status: {status}</p>
                <p>ETA: {eta}</p>
                <p>Last Updated: {last_updated}</p>
                <p>Verification Required: {verification_required}</p>
                <p>Sender: {sender}</p>
                <p>Pickup Location: {location_name}</p>
                <p>Pickup Coordinate: {location_coordinate_latitude},{location_coordinate_longitude}</p>
                {/* <p>Notes: {notes}</p> */}
            </div>
        </article>
    );
  }
