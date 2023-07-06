import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Nopage from "../pages/NoPage/Nopage";
import Menu from "../pages/Menu/Menu";
import OrderStatus from "../pages/orderStatus/OrderStatus";
import Dashboard from "../pages/dashboard/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<PrivateRoute>{<Menu />}</PrivateRoute>} />
      <Route
        path="/dashboard"
        element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
      />
      <Route
        path="/order-status"
        element={<PrivateRoute>{<OrderStatus />}</PrivateRoute>}
      />

      <Route path="*" element={<Nopage />} />
    </Routes>
  );
};

export default AllRoutes;
