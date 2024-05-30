import React, { useState } from "react";
import InfosMenu from "./components/infos";

const Burger = () => {
  // JAVASCRIPT part start

  // VARIABLES START

  const [loading, setLoading] = useState(false);
  const burgerData = JSON.parse(localStorage.getItem("burger")) || [];
  const drinkData = JSON.parse(localStorage.getItem("drink")) || [];
  const sweetData = JSON.parse(localStorage.getItem("sweet")) || [];
  // VARIABLES END

  // AGAR MALUMOT BO'LMASA EKRANGA SO'Z QAYTARADI
  if (burgerData.length === 0) {
    return (
      <div className="noneProduct">
        <p>No products have been added yet :(</p>
      </div>
    );
  }
  // PLUS FUNCTION START
  function plus(id, index) {
    burgerData.map((item) => {
      if (item.id === id) {
        item.count++;
        localStorage.setItem("burger", JSON.stringify(burgerData));
      }
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }
  // PLUS FUNCTION END

  // MINUS FUNCTION START

  function minus(id) {
    burgerData.map((item) => {
      if (item.id === id) {
        if (item.count > 0) {
          item.count--;
          localStorage.setItem("burger", JSON.stringify(burgerData));
        }
      }
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  // MINUS FUNCTION END

  // JAVASCRIPT part end

  return (
    // HTML part start
    <>
      <div className="burgerPage">
        {burgerData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="title">
                <b>{item.name}</b>
                <p>Unit price: ${item.price}</p>
                <p>{item.count} pcs</p>
                <p>${item.count * item.price}</p>
              </div>
              <img src={item.image} alt={item.name} />
              <div className="count">
                <button onClick={(id) => plus(item.id)}>+</button>
                <button onClick={(id) => minus(item.id)}>-</button>
              </div>
            </div>
          );
        })}
      </div>

      <InfosMenu />
    </>

    // HTML part end
  );
};

export default Burger;
