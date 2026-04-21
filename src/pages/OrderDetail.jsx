import { useParams } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

const OrderDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useOrder();
  const order = state.orders.find((o) => o.orderId.toString() === id);

  if (!order) return <h2 data-testid="not-found">Order not found</h2>;

  return (
    <div className="detail-page">
      <h2>Order Details: {order.orderId}</h2>
      <p>Restaurant: {order.restaurant}</p>
      <div className="items-list">
        {order.items.map((item, index) => (
          <div key={index} className="item">
            <span>{item.name} | Qty: {item.quantity}</span>
            {/* Dynamic Calculation Constraint */}
            <span> Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <h3>Total: ${order.totalAmount}</h3>
      <p>Status: {order.status}</p>
      <button onClick={() => dispatch({ type: "MARK_DELIVERED", payload: order.orderId })}>
        Mark as Delivered
      </button>
    </div>
  );
};
export default OrderDetail;