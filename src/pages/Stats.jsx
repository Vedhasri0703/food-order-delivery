import { useEffect } from "react";
import { useOrder } from "../context/OrderContext";

const Stats = () => {
  const { state } = useOrder();
  const { orders } = state;

  // Use reduce/filter for dynamic calculations
  const total = orders.length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;
  const cancelled = orders.filter((o) => o.status === "Cancelled").length;

  useEffect(() => {
    // Evaluation Requirement: Global state exposure
    window.appState = {
      totalOrders: total,
      deliveredOrders: delivered,
      cancelledOrders: cancelled
    };
  }, [orders, total, delivered, cancelled]);

  return (
    <div className="stats-page">
      <h1>Orders Dashboard</h1>
      <p data-testid="total-orders">Total Orders: {total}</p>
      <p data-testid="delivered-orders">Delivered: {delivered}</p>
      <p data-testid="cancelled-orders">Cancelled: {cancelled}</p>
    </div>
  );
};
export default Stats;