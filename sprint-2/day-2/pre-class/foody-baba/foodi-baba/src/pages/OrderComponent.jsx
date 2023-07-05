import React from "react";
import "./OrderComponent.css";

const OrderComponent = ({ orders, onUpdateStatus }) => {
  return (
    <div className="order-container">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order.order_id}>
          <p>Order ID: {order.order_id}</p>
          <p>Customer Name: {order.customer_name}</p>
          <p>Status: {order.status}</p>
          <button onClick={() => onUpdateStatus(order.order_id, "preparing")}>
            Start Preparing
          </button>
          <button onClick={() => onUpdateStatus(order.order_id, "ready")}>
            Ready for Pickup
          </button>
          <button onClick={() => onUpdateStatus(order.order_id, "delivered")}>
            Delivered
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrderComponent;
