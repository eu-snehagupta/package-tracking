// React core
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
    const {
      id,
      status,
      parcel_id,
      sender,
      location_name
    } = data;
  
    return (
        <article className="card">
            <Link to={`package/${id}`}>
              <div className="card-item">
                  <h3 className="parcel-id">#Parcel ID: {parcel_id}</h3>
                  <p>Order status: {status}</p>
                  <p>Sender: {sender}</p>
                  <p>Pickup Location: {location_name}</p>
              </div>
            </Link>
        </article>
    );
  }
