import React, { useEffect } from "react";
import { useState } from "react";
import { getParks } from "../dataInterface";

export const ParkingLots = props => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    getParks().then(p => setParks(p.parklots));
  }, []);

  return (
    <div className="page-container">
      {parks.map(pl => (
        <div
          className="list-item"
          style={{
            display: "flex",
            height: 80,
            justifyContent: "space-between"
          }}
          key={pl.name}
        >
          <div>
            <p className="list-item-title">{pl.name}</p>
            <p className="list-item-description">{pl.adress}</p>
          </div>
          <p
            className="list-item-description"
            style={{ color: getSpotsColor(pl.free_car_spots) }}
          >
            {pl.free_car_spots}
          </p>
        </div>
      ))}
    </div>
  );
};

const getSpotsColor = spots => {
  const s = spots.split("/");
  const ratio = +s[0] / +s[1];
  return ratio > 0 ? "white" : "red";
};
