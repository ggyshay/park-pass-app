import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Cars } from "./pages/cars";
import { ParkingLots } from "./pages/parkingLots";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");

  const title = path === "cars" ? "Carros" : "Estacionamentos";
  return (
    <div>
      <Header onClick={() => setIsOpen(true)} title={title} />
      <div className={"side-menu" + (isOpen ? " open" : "")}>
        <img
          src={require("./icons/close.svg")}
          onClick={() => setIsOpen(false)}
          style={{ marginBottom: 16 }}
        />
        <div
          onClick={() => {
            setPath("parks");
            setIsOpen(false);
          }}
          className="menu-item"
        >
          Estacionamentos
        </div>
        <div
          onClick={() => {
            setPath("cars");
            setIsOpen(false);
          }}
          className="menu-item"
        >
          Carros
        </div>
      </div>
      {path === "cars" && <Cars />}
      {path === "parks" && <ParkingLots />}
    </div>
  );
}

export default App;
