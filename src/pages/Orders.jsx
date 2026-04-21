import { useOrder } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const { state } = useOrder();
  if (state.loading) return <p>Loading...</p>;

  return (
    <div className="orders-container">
      <h1>All Valid Orders</h1>
      <div className="list">
        {state.orders.map(o => <OrderCard key={o.orderId} order={o} />)}
      </div>
    </div>
  );
};
export default Orders;