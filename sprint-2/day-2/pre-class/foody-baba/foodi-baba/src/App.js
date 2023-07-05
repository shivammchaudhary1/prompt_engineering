// import AllRoutes from "./components/AllRoutes";

// function App() {
//   return (
//     <div className="App">
//       <AllRoutes />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddDishComponent from "./pages/AddDishComponent";
import MenuComponent from "./pages/MenuComponent";
import OrderComponent from "./pages/OrderComponent";

import "./App.css";

const App = () => {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchMenu();
    fetchOrders();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get("/api/dishes");
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addDish = async (newDish) => {
    try {
      await axios.post("/api/dishes", newDish);
      alert("Dish added successfully!");
      fetchMenu();
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`/api/orders/${orderId}`, { status });
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Zesty Zomato</h1>
      <div className="main-container">
        <div className="left-container">
          <MenuComponent menu={menu} />
          <AddDishComponent addDish={addDish} />
        </div>
        <div className="right-container">
          <OrderComponent orders={orders} onUpdateStatus={updateOrderStatus} />
        </div>
      </div>
    </div>
  );
};

export default App;
