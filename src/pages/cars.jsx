import React from "react";
import "./pages.css";
import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../dataInterface";

export const Cars = props => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars().then(cs => setCars(cs.cars));
  }, []);
  return (
    <div className="page-container">
      {cars.map(car => (
        <div className="list-item" key={car.plate}>
          <p className="list-item-title">{car.model}</p>
          <p className="list-item-description">{car.plate}</p>
          {car.localiza_active === 1 && (
            <p
              className="list-item-description"
              style={{ color: "orange", marginLeft: 64 }}
            >
              Localiza
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
