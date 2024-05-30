import React, { useEffect, useState } from "react";

const InfosMenu = () => {
  const [burgerData, setBurgerData] = useState(
    JSON.parse(localStorage.getItem("burger")) || []
  );
  const [drinkData, setDrinkData] = useState(
    JSON.parse(localStorage.getItem("drink")) || []
  );
  const [sweetData, setSweetData] = useState(
    JSON.parse(localStorage.getItem("sweet")) || []
  );
  const [ orderedBurger, setOrderedBurger ] = useState({})
  const [ orderedDrink, setOrderedDrink ] = useState({})
  const [ orderedSweet, setOrderedSweet ] = useState({})

useEffect(()=>{
  burgerData.map((item) => {
    if (item.count > 0) {
  setOrderedBurger(item)
 
    }
   else {
  return null
  }})
},burgerData )
useEffect(()=>{
  drinkData.map((item) => {
    if (item.count > 0) {
      setOrderedDrink(item)
    }
   else {
  return null
  }})
},drinkData )
useEffect(()=>{
  sweetData.map((item) => {
    if (item.count > 0) {
      setOrderedSweet(item)
    }
   else {
  return null
  }})
},sweetData )

console.log(orderedBurger);

//   })

  // try {
    //       const token = "6731309975:AAGTZwyvZgCtJ40FFwGvdJiXt9pO4V_3170";
    //       const chatId = "@burgershop_burgers";
    //        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    //         chat_id: chatId,
    //         text: `Mahsulot: ${item.name} Soni: ${item.count}
    // `,
    //       });
    //     } catch (error) {
    //       console.error("Xato ketdi", error);
    //       alert("malumoting yuborilmadi");
    //     }
    //   }


//     if (data.length > 0) {
//       alert("Siz menyudan mahsulot tanlamadingiz");
//     } else {
//       try {
//         const token = "6731309975:AAGTZwyvZgCtJ40FFwGvdJiXt9pO4V_3170";
//         const chatId = "@burgershop_burgers";
//         await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
//           chat_id: chatId,
//           text: `Mahsulot: ${data.name} Soni: ${data.count}
//  `,
//         });
//       } catch (error) {
//         console.error("Xato ketdi", error);
//         alert("malumoting yuborilmadi");
//       }
//     }
//     if (data.length > 0) {
//       alert("Siz menyudan mahsulot tanlamadingiz");
//     } else {
//       try {
//         const token = "6731309975:AAGTZwyvZgCtJ40FFwGvdJiXt9pO4V_3170";
//         const chatId = "@burgershop_burgers";
//         await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
//           chat_id: chatId,
//           text: `Mahsulot: ${data.name} Soni: ${data.count}
//  `,
//         });
//       } catch (error) {
//         console.error("Xato ketdi", error);
//         alert("malumoting yuborilmadi");
//       }
//     }
//   };
  return (
    <div className="menu">
      {burgerData.map((item, id) => {
        if (item.count > 0) {
          return (
            <div className="menuTitle" key={id}>
              <b>{item.count > 0 ? item.name : ""}</b>
              <h3>{item.count > 0 ? item.count : ""} pcs</h3>
              <p>${item.count > 0 ? item.count * item.price : ""}</p>
            </div>
          );
        } else {
          return "";
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
        } else {
          return "";
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
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default InfosMenu;
