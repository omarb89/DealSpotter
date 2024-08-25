import React from "react";
import Header from "./components/Header.js";
import DealCard from "./components/DealCard.js";
import "./App.css";

const App = () => {
  const deals = [
    {
      id: 1,
      title: "Casque Bluetooth Sony WH-1000XM4",
      description: "Réduction de bruit active, excellente qualité sonore",
      price: 249,
      image: "https://www.sony.fr/image/casque-sony.jpg", // Exemple d'image
    },
    {
      id: 2,
      title: "Téléviseur 4K Samsung 55\"",
      description: "Smart TV avec résolution 4K Ultra HD",
      price: 599,
      image: "https://www.samsung.com/image/tv.jpg", // Exemple d'image
    },
    {
      id: 3,
      title: "Nintendo Switch",
      description: "Console de jeu hybride Nintendo",
      price: 299,
      image: "https://www.nintendo.com/image/switch.jpg", // Exemple d'image
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="deals-container">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default App;
