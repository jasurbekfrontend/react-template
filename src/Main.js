// IMPORTS START

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { FaBottleWater } from "react-icons/fa6";
import { PiHamburgerBold } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import logo from "./logo.png";
import Burger from "./Burger";
import Drink from "./Drink";
import Sweet from "./Sweet";
import Input from "./Input";

// IMPORTS END

const Main = () => {
  // VARIABLES START

  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [burgerData, setBurgerData] = useState(
    JSON.parse(localStorage.getItem("burger")) || []
  );
  const [drinkData, setDrinkData] = useState(
    JSON.parse(localStorage.getItem("drink")) || []
  );
  const [sweetData, setSweetData] = useState(
    JSON.parse(localStorage.getItem("sweet")) || []
  );

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const allItems = [...burgerData, ...drinkData, ...sweetData];
  //   const filteredItems = allItems.filter((item) => item.count > 0);
  //   setData(filteredItems);
  // }, [burgerData, drinkData, sweetData]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // POST FUNCTION

  // VARIABLES END

  // SUBMIT FUNKSIYA START

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

        <Link className="modal" to="/input">
          Add New
        </Link>
        {/* <button onClick={() => handlePost()}>Send</button> */}
      </div>
      {/* sitebar end */}

      {/* komponents start */}
      <Routes>
        <Route path="/" element={<Burger />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/sweet" element={<Sweet />} />
        <Route path="/input" element={<Input />} />
      </Routes>

      {/* komponents end */}
    </div>
    // wrapper end
  );
};

export default Main;
