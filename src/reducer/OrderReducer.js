const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload, loading: false };
    
    case "MARK_ORDER_DELIVERED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload
            ? { ...order, status: "Delivered" }
            : order
        ),
      };

    case "UNDO_ORDER_DELIVERED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload
            ? { ...order, status: order.status !== "Delivered" ? "Delivered" : "Pending" }
            : order
        ),
      };

    default:
      return state;
  }
};

export default OrderReducer;