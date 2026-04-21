import { useOrder } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const { dispatch } = useOrder();
  const navigate = useNavigate();

  return (
    <div className="order-card" data-testid="order-item">
      <h3 onClick={() => navigate(`/orders/${order.orderId}`)} style={{cursor:'pointer'}}>
        {order.restaurant}
      </h3>
      <p>Customer: {order.customerName}</p>
      <p>Amount: ${order.totalAmount}</p>
      <p>Status: <strong>{order.status}</strong></p>
      
      <div className="actions">
        <button onClick={() => dispatch({type: "UPDATE_STATUS", payload: {id: order.orderId, status: "Delivered"}})}>
          Mark Delivered
        </button>
        <button onClick={() => dispatch({type: "TOGGLE_FAVORITE", payload: order.orderId})}>
          {order.favorite ? "⭐ Fav" : "☆ Fav"}
        </button>
        <button onClick={() => dispatch({type: "DELETE_ORDER", payload: order.orderId})}>
          🗑️
        </button>
      </div>
    </div>
  );
};
export default OrderCard;