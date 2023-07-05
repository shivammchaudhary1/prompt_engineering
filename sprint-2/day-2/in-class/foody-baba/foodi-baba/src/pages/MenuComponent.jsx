// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./MenuComponent.css";

// const MenuComponent = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/api/dishes");
//       setMenu(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="menu-container">
//       <h2>Menu</h2>
//       {menu.map((dish) => (
//         <div className="dish-card" key={dish.dish_id}>
//           <p>Dish Name: {dish.dish_name}</p>
//           <p>Price: {dish.price}</p>
//           <p>Availability: {dish.availability ? "Yes" : "No"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenuComponent;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MenuComponent.css";

const MenuComponent = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/dishes");
      setMenu(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      {menu.map((dish) => (
        <div className="dish-card" key={dish.dish_id}>
          <p>Dish Name: {dish.dish_name}</p>
          <p>Price: {dish.price}</p>
          <p>Availability: {dish.availability ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
