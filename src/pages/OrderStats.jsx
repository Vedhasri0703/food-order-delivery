import React, { useEffect } from "react";
import { useOrder } from "../context/OrderContext";

const OrderStats = () => {
  const { orders } = useOrder();

  // Dynamic calculations using .filter and .reduce
  const total = orders.length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;
  const cancelled = orders.filter((o) => o.status === "Cancelled").length;

  useEffect(() => {
    // Evaluation requirement: Exposed global state
    window.appState = {
      totalOrders: total,
      deliveredOrders: delivered,
      cancelledOrders: cancelled,
    };
  }, [orders, total, delivered, cancelled]);

  return (
    <div className="stats-page" data-testid="stats-page">
      <h2>Order Dashboard</h2>
      <p data-testid="total-orders">Total Orders: {total}</p>
      <p data-testid="delivered-orders">Delivered: {delivered}</p>
      <p data-testid="cancelled-orders">Cancelled: {cancelled}</p>
    </div>
  );
};
export default OrderStats;