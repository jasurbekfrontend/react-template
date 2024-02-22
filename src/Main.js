// IMPORTS START

import React, { useRef, useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaBottleWater } from "react-icons/fa6";
import { PiHamburgerBold } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import logo from "./logo.png";
import Burger from "./Burger";
import Drink from "./Drink";
import Sweet from "./Sweet";

// IMPORTS END

const Main = () => {
  // VARIABLES START
  const [category, setCategory] = useState("burger");
  const image = useRef();
  const name = useRef();
  const price = useRef();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const burgerData = JSON.parse(localStorage.getItem("burger")) || []
    
  const drinkData = JSON.parse(localStorage.getItem("drink")) || []
    
  const sweetData = JSON.parse(localStorage.getItem("sweet")) || []
    



  // VARIABLES END

  // SUBMIT FUNKSIYA START

  function handleSubmit(e) {
    e.preventDefault();
    if (
      image.current.value === "" ||
      name.current.value === "" ||
      price.current.value === ""
    ) {
      alert("Please fill out all fields");
    } else {
      const key = category.toString();
      const data = JSON.parse(localStorage.getItem(key)) || [];
      const collector = {
        image: image.current.value,
        name: name.current.value,
        price: price.current.value,
        count: 0,
        id: Date.now(),
      };
      data.push(collector);
      localStorage.setItem(key, JSON.stringify(data));
      image.current.value = "";
      name.current.value = "";
      price.current.value = "";
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  // SUBMIT FUNKSIYA END

  // /TOTAL PRICE CHIQARADIGAN START
  useEffect(() => {
    function total() {
      const categories = ["burger", "drink", "sweet"];
      let total = 0;
      categories.forEach((item) => {
        const data = JSON.parse(localStorage.getItem(item)) || [];
        data.forEach((item) => {
          total += item.count * item.price;
        });
      });
      setTotalPrice(total);
    }

    total();
  }, []);

  // /TOTAL PRICE CHIQARADIGAN END

  return (
    // wrapper start
    <div className="wrapper">
      {/* sitebar start */}
      <div className="sitebar">
        <a href="/" className="logo">
          <img src={logo} alt="" />
          <p>Burger Cafe</p>
        </a>
        <div className="links">
          <NavLink activeClassName="active" to="/">
            <PiHamburgerBold /> Burgers
          </NavLink>
          <NavLink activeClassName="active" to="/drink">
            <FaBottleWater /> Drinks
          </NavLink>
          <NavLink activeClassName="active" to="/sweet">
            <LuCakeSlice /> Sweets
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <input ref={image} type="text" placeholder="Image" />
          <input ref={name} type="text" placeholder="Name" />
          <input ref={price} min={0} type="number" placeholder="Price" />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="burger">Burgers</option>
            <option value="drink">Drinks</option>
            <option value="sweet">Sweets</option>
          </select>

          <button className="add">Add</button>
        </form>
        <button className="modal">Form</button>
      </div>
      {/* sitebar end */}

      {/* komponents start */}
      <Routes>
        <Route path="/" element={<Burger />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/sweet" element={<Sweet />} />
      </Routes>

      {/* komponents end */}

<div className="menu" >
  {burgerData.map((item, id) => {
    if (item.count > 0) {
      return (
        <div className="menuTitle" key={id}>
          <b>{item.count > 0 ? item.name : ""}</b>
          <h3>{item.count > 0 ? item.count : ""} pcs</h3>
          <p>${item.count > 0 ? item.count * item.price : ""}</p>

        </div>
      );
    }else{
      return('')
    }
  })}
  {drinkData.map((item, id) => {
    if (item.count > 0) {
      return (
        <div className="menuTitle" key={id}>
          <b>{item.count > 0 ? item.name : ""}</b>
          <h3>{item.count > 0 ? item.count : ""} pcs</h3>
          <p>${item.count > 0 ? item.count * item.price : ""}</p>

        </div>
      );
    }else{
      return('')
    }
  })}
  {sweetData.map((item, id) => {
    if (item.count > 0) {
      return (
        <div className="menuTitle" key={id}>
          <b>{item.count > 0 ? item.name : ""}</b>
          <h3>{item.count > 0 ? item.count : ""} pcs</h3>
          <p>${item.count > 0 ? item.count * item.price : ""}</p>

        </div>
      );
    }else{
      return('')
    }
  })}

     
</div>

    </div>
    // wrapper end
  );
};

export default Main;
