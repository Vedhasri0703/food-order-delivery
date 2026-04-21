import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="order-card" data-testid="order-item">
      <h3>{order.restaurant}</h3>
      {/* Edge Case: Missing name -> Unknown */}
      <p>Customer: {order.customerName || "Unknown"}</p>
      <p>Amount: ${order.totalAmount}</p>
      {/* Edge Case: Missing rating -> don't display */}
      {order.rating && <p>Rating: {order.rating} ⭐</p>}
      <button onClick={() => navigate(`/orders/${order.orderId}`)}>
        View Details
      </button>
    </div>
  );
};
export default OrderCard;